import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../container/Home";
import Footer from "./Footer";
import Header from "./Header";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home}></Route>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
