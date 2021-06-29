import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../actions/favouriteActions";
import { favouriteItems } from "../initialValues/favouriteItems";

const initialState = {
  favouriteItems: favouriteItems,
};

export default function favouriteReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case ADD_TO_FAV:
      let advertisement = state.favouriteItems.find(
        (x) => x.advertisement.id === payload.id
      );
      if (advertisement) {
        advertisement.quantity++;
        return { ...state };
      } else {
        return {
          ...state,
          favouriteItems: [
            ...state.favouriteItems,
            { quantity: 1, advertisement: payload },
          ],
        };
      }

    case REMOVE_FROM_FAV:
      return {
        ...state,
        favouriteItems: state.favouriteItems.filter(
          (x) => x.advertisement.id !== payload.id
        ),
      };

    default:
      return state;
  }
}
