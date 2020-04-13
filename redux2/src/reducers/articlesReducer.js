export default function (state = {}, action) {
  switch (action.type) {
    case "GET_LATEST":
      //... state to iterate the array
      return { ...state, latestdata: action.payload };

    case "GET_ARTICLE":
      //... state to iterate the array
      return { ...state, articledata: action.payload };

    case "SELECTED_NEWS":
      //... state to iterate the array
      return { ...state, selected: action.payload };

    case "CLEAR_SELECTED_NEWS":
      //... state to iterate the array
      return { ...state, clearselected: action.payload };

    default:
      return state;
  }
}
