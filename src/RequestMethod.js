import axios from "axios";

const Base_Url = "https://www.themealdb.com/api/json/v1/1/list.php?i=a";

export const PublicRequest = axios.create({
  baseURL: Base_Url,
  headers: {
    "Content-Type": "application/json",
  },
});
