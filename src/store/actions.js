import { PublicRequest } from "@/RequestMethod";

export async function searchMeals({ commit }, keyword) {
  try {
    const { data } = await PublicRequest.get(`search.php?s=${keyword}`);
    commit("setSearchMeals", data.meals);
  } catch (error) {
    console.log(error);
  }
}

export function AddTodo({ commit }, todo) {
  commit("setTodo", todo);
}
