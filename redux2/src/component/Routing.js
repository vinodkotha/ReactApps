import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../container/Home";
import Footer from "./Footer";
import Header from "./Header";
import NewsDetail from "../container/NewsDetail";
import GalleryDetail from "../container/GalleryDetail";
const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/details/:id" component={NewsDetail}></Route>
      <Route exact path="/gallerydetails/:id" component={GalleryDetail}></Route>

      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
