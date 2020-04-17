export default function (state = {}, action) {
  switch (action.type) {
    case "GET_GALLERY":
      //... state to iterate the array
      return { ...state, gallerydata: action.payload };
    case "SELECTED_GALLERY_NEWS":
      //... state to iterate the array
      return { ...state, selectedgallery: action.payload };
    case "HANDLE_LIKES":
      //... state to iterate the array
      return { ...state, selectedgallery: [action.payload] };
    default:
      return state;
  }
}
