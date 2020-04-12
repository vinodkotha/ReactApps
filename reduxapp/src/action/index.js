//Action for movies, instead of api calling we simply return movieslist

export function movieList() {
  return {
    type: "MOVIE_LIST",
    payload: [
      { id: 1, name: "AVENGERS" },
      { id: 2, name: "DEATH_RACE" },
      { id: 3, name: "MAD_MAX" },
    ],
  };
}

export function groceryList() {
  return {
    type: "GROCERY_LIST",
    payload: [
      { id: 1, name: "TOMATO" },
      { id: 2, name: "CILANTRO" },
      { id: 3, name: "PEPPER" },
    ],
  };
}
