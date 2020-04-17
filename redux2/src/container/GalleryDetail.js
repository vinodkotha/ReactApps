import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { selectedGalleryNews } from "../action";
import LikeCounter from "./LikeCounter";

class GalleryDetail extends Component {
  componentWillMount() {
    //call using propTypes
    this.props.dispatch(selectedGalleryNews(this.props.match.params.id));
  }

  renderGalleryDetail = ({ selectedgallery }) => {
    if (selectedgallery) {
      return selectedgallery.map((data) => {
        return (
          <div key={data.id}>
            <div className="tags">
              <span>
                <i className="fa fa-eye"></i>
                {data.views}
              </span>
              <span>
                <i className="fa fa-thumbs-up"></i>
                {data.likes[0]}
              </span>
              <span>
                <i className="fa fa-thumbs-down"></i>
                {data.likes[1]}
              </span>
            </div>
            <div className="top">
              <h2>{data.title}</h2>
              <span>Article By:{data.artist}</span>
              <img src={`/images/galleries/${data.images[0].img}`} />
              <div>
                <LikeCounter
                  articleId={data.id}
                  likes={data.likes[0]}
                  dislikes={data.likes[1]}
                  from="gallery"
                />
              </div>
            </div>
          </div>
        );
      });
    }
  };

  render() {
    console.log(this.props);
    return (
      <div className="news_container">
        {this.renderGalleryDetail(this.props.details)}
      </div>
    );
  }
}

function stateTOProps(state) {
  console.log(state);
  return {
    details: state.galleries,
  };
}

GalleryDetail.protoTypes = {
  dispatch: PropTypes.func,
};
export default connect(stateTOProps)(GalleryDetail);
