// userService.js
// Standalone Axios-based API service for User Management

import axios from "axios";

//const BASE_URL = "http://127.0.0.1:3001"; // Change to your API base URL
const BASE_URL = "https://v2qdzkm18k.execute-api.us-east-1.amazonaws.com/Prod"; // Change to your API base URL

// Create Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

// Optional: interceptors to normalize AWS Lambda proxy responses
api.interceptors.response.use(
  (response) => {
    if (response?.data && typeof response.data.body === "string") {
      try {
        response.data.body = JSON.parse(response.data.body);
      } catch (e) {}
    }
    return response;
  },
  (error) => Promise.reject(error)
);

/**
 * Create a new user
 * POST /user/create-user
 */
export async function createUser(data) {
  const res = await api.post("/user/create-user", data);
  return res.data.body?.message ?? res.data;
}

/**
 * Get all users
 * GET /user/list-users
 */
export async function listUsers() {
  const res = await api.get("/user/list-users");
  return res.data.body?.message ?? res.data;
}

/**
 * Get a user by query params
 * GET /user/get-user?user_id=..&name=..
 */
export async function getUser(query) {
  const res = await api.get("/user/get-user", { params: query });
  return res.data.body?.message ?? res.data;
}

/**
 * Update a user
 * POST /user/update-user
 */
export async function updateUser(data) {
  const res = await api.post("/user/update-user", data);
  return res.data.body?.message ?? res.data;
}

/**
 * Remove a user
 * DELETE /user/remove-user/{user_id}
 */
export async function removeUser(user_id) {
  const res = await api.delete(`/user/remove-user/${user_id}`);
  return res.data.body?.message ?? res.data;
}

export default {
  createUser,
  listUsers,
  getUser,
  updateUser,
  removeUser
};
