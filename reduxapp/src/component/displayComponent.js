import React from "react";

const Display = (props) => {
  const renderMoviesList = ({ moviesList }) => {
    if (moviesList) {
      return moviesList.map((item) => {
        return <div key={item.id}> {item.name}</div>;
      });
    }
  };

  const renderGroceriesList = ({ groceriesList }) => {
    if (groceriesList) {
      return groceriesList.map((item) => {
        return <div key={item.id}> {item.name}</div>;
      });
    }
  };

  return (
    <div>
      <h1>Movies List</h1>
      {renderMoviesList(props)}
      <h1>Groceries List</h1>
      {renderGroceriesList(props)}
    </div>
  );
};

export default Display;
