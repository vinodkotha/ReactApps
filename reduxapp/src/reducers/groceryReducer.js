export default function (state = null, action) {
  //action is gonna map respective actions
  switch (action.type) {
    case "GROCERY_LIST":
      return action.payload;
    default:
      return state;
  }
}
