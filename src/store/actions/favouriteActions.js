export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";

export function addToFav(advertisement) {
  return {
    type: ADD_TO_FAV,
    payload: advertisement,
  };
}

export function removeFromFav(advertisement) {
  return { type: REMOVE_FROM_FAV, payload: advertisement };
}
