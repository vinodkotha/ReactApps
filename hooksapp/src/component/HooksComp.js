import React, { useState, useEffect } from "react";

const url = "";

function HookComp() {
  const [title] = useState("this is hook app");
  const [details] = useState(
    "this is hook app to be used to accomplish the state management and lifecycle hooks to call apis"
  );
  const [count, setCount] = useState(0);
  const [movies, setMovies] = useState("");

  //call api using useEffect
  useEffect(() => {
    //call using simple fetch
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data));

    //call using async function
    /* fetchMovies();
    async function fetchMovies() {
      const res = await fetch(url)
        .json()
        .then((data) => setMovies(data));
    } */
  });

  return (
    <div className="jumbotron">
      <h1>{title}</h1>
      <p>{details}</p>
      <p>{count}</p>
      <div className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Click me
      </div>
    </div>
  );
}

export default HookComp;
