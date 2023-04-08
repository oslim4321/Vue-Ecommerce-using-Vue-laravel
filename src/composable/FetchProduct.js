import { PublicRequest } from "@/RequestMethod";

export default function fetchData() {
  const getAllProduct = (url) => {
    try {
      const res = PublicRequest.get(url);
      return res.data;
    } catch (error) {
      return error;
    }
  };

  return {
    getAllProduct,
  };
}
