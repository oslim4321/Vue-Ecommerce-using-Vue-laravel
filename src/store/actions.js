import { PublicRequest } from "@/RequestMethod";

export async function searchMeals({ commit }, keyword) {
  try {
    const { data } = await PublicRequest.get(`search.php?s=${keyword}`);
    console.log(data);
    commit("setSearchMeals", data.meals);
  } catch (error) {
    console.log(error);
  }
}
