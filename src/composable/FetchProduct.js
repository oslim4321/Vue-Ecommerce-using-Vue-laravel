import { PublicRequest } from "@/RequestMethod";

export default function fetchData() {
  const getAllProduct = async (url) => {
    try {
      const res = PublicRequest.get(url);
      const prod = await res;
      return prod.data;
    } catch (error) {
      return error;
    }
  };

  return {
    getAllProduct,
  };
}
