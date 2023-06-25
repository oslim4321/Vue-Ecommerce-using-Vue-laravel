import axios from "axios";

const Base_Url =
  "http://127.0.0.1:8000/www.themealdb.com/api/json/v1/1/list.php?i=list";

export const PublicRequest = axios.create({
  baseURL: Base_Url,
  headers: {
    "Content-Type": "application/json",
  },
});
