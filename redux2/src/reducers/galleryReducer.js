export default function (state = {}, action) {
  switch (action.type) {
    case "GET_GALLERY":
      //... state to iterate the array
      return { ...state, gallerydata: action.payload };

    default:
      return state;
  }
}
