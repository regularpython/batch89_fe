import React, { useEffect, useState } from "react";
import "./UserCss/Users.css";
import user_api from "./APIServices/user_api";

function Users() {
  // Table state
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  // Form state
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formMsg, setFormMsg] = useState({ type: "", text: "" });

  // Edit mode
  const [editId, setEditId] = useState(null);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const data = await user_api.listUsers();
      setUsers(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const resetForm = () => {
    setFirstName("");
    setEmail("");
    setPhone("");
    setEditId(null);
    setFormMsg({ type: "", text: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormMsg({ type: "", text: "" });

    // basic validations
    if (!firstName.trim()) return setFormMsg({ type: "error", text: "First name is required." });
    if (!email.trim()) return setFormMsg({ type: "error", text: "Email is required." });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return setFormMsg({ type: "error", text: "Please enter a valid email." });
    }
    if (!phone.trim()) return setFormMsg({ type: "error", text: "Phone number is required." });

    try {
      setSubmitting(true);
      if (editId) {
        // update
        await user_api.updateUser({
          id: editId,
          first_name: firstName.trim(),
          email: email.trim(),
          phone_number: phone.trim(),
        });
        setFormMsg({ type: "success", text: "User updated successfully." });
      } else {
        // create
        await user_api.createUser({
          first_name: firstName.trim(),
          email: email.trim(),
          phone_number: phone.trim(),
        });
        setFormMsg({ type: "success", text: "User created successfully." });
      }
      resetForm();
      await loadUsers();
    } catch (err) {
      console.error("Error saving user:", err);
      setFormMsg({ type: "error", text: "Failed to save user. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (user) => {
    setEditId(user.user_id);
    setFirstName(user.first_name);
    setEmail(user.email);
    setPhone(user.phone_number);
    setFormMsg({ type: "", text: "" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (user_id) => {
    const ok = window.confirm("Are you sure you want to delete this user?");
    if (!ok) return;

    try {
      setDeletingId(user_id);
      await user_api.removeUser(user_id);
      await loadUsers();
    } catch (err) {
      console.error("Error deleting user:", err);
      alert("Failed to delete user. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  const fmtDate = (val) => (val ? new Date(val).toLocaleString() : "-");

  return (
    <div className="users-container">
      <h2>User Management</h2>

      {/* Create / Update Form */}
      <div className="signup-card" style={{ marginBottom: 20 }}>
        <h3>{editId ? "Update User" : "Create User (Signup)"}</h3>
        <form
          onSubmit={handleSubmit}
          className="signup-form"
          style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr 1fr 1fr auto" }}
        >
          <input
            type="text"
            placeholder="First Name*"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            disabled={submitting}
          />
          <input
            type="email"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitting}
          />
          <input
            type="tel"
            placeholder="Phone Number*"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={submitting}
          />
          <button type="submit" className="btn-primary" disabled={submitting}>
            {submitting ? (editId ? "Updating..." : "Creating...") : editId ? "Update" : "Create"}
          </button>
        </form>
        {formMsg.text && (
          <p style={{ marginTop: 8, color: formMsg.type === "error" ? "#b91c1c" : "#047857" }}>
            {formMsg.text}
          </p>
        )}
      </div>

      {/* Users Table */}
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th style={{ textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.user_id}>
                  <td>{user.user_id}</td>
                  <td>{user.first_name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone_number}</td>
                  <td>{fmtDate(user.created_at)}</td>
                  <td>{fmtDate(user.updated_at)}</td>
                  <td style={{ textAlign: "right" }}>
                    <button
                      className="btn-edit"
                      onClick={() => handleEdit(user)}
                      disabled={deletingId === user.user_id}
                      title="Edit user"
                      style={{ marginRight: "8px" }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(user.user_id)}
                      disabled={deletingId === user.user_id}
                      title="Delete user"
                    >
                      {deletingId === user.user_id ? "Deleting..." : "Delete"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center", padding: "12px" }}>
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Users;
