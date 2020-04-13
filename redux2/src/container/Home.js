import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { latestNews } from "../action";
import { articleNews } from "../action";
import { galleryNews } from "../action";
import { bindActionCreators } from "redux";
import LatestDisplay from "../component/home/latestDisplay";
import ArticleDisplay from "../component/home/ArticleDisplay";
import GalleryDisplay from "../component/home/GalleryDisplay";

class Home extends Component {
  componentDidMount() {
    //call actions api's
    if (Object.entries(this.props.myArticle).length === 0) {
      this.props.latestNews();
      this.props.articleNews();
      this.props.galleryNews();
    }
  }

  render() {
    return (
      <Fragment>
        <LatestDisplay ldata={this.props.myArticle.latestdata} />
        <ArticleDisplay articleArray={this.props.myArticle.articledata} />
        <GalleryDisplay galleryArray={this.props.myGallery.gallerydata} />
      </Fragment>
    );
  }
}

function mapStateToProp(state) {
  console.log(state);
  return {
    myArticle: state.articles,
    myGallery: state.galleries,
  };
}

function mapDispatchAction(dispatch) {
  return bindActionCreators({ latestNews, articleNews, galleryNews }, dispatch);
}

export default connect(mapStateToProp, mapDispatchAction)(Home);
