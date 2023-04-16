import axios from "axios";

const Base_Url = "http://127.0.0.1:8000/api";

export const PublicRequest = axios.create({
  baseURL: Base_Url,
  headers: {
    "Content-Type": "application/json",
  },
});
