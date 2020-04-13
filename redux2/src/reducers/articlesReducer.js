export default function (state = {}, action) {
  switch (action.type) {
    case "GET_LATEST":
      //... state to iterate the array
      return { ...state, latestdata: action.payload };

    case "GET_ARTICLE":
      //... state to iterate the array
      return { ...state, articledata: action.payload };
    default:
      return state;
  }
}
