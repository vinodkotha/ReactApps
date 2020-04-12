//movie reducer for receiving the state from action

export default function (state = null, action) {
  //action is gonna map respective actions
  switch (action.type) {
    case "MOVIE_LIST":
      return action.payload;
    default:
      return state;
  }
}
