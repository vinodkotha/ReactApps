//Talks to all reducers for view

import React, { Component } from "react";
import { movieList, groceryList } from "../action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Display from "../component/displayComponent";

class App extends Component {
  componentDidMount() {
    this.props.movieList();
    this.props.groceryList();
  }

  render() {
    return (
      (<h1>Redux</h1>),
      (
        <Display
          moviesList={this.props.myMovies}
          groceriesList={this.props.myGroceries}
        ></Display>
      )
    );
  }
}

//mapping state to props
function mapStateToProps(state) {
  console.log("my moviesList: " + state.movies);
  console.log("my groceriesList: " + state.groceries);
  return {
    myMovies: state.movies,
    myGroceries: state.groceries,
  };
}

//this will dispatch action
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ movieList, groceryList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
