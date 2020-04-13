import React from "react";
import { Link } from "react-router-dom";

const latestDisplay = (props) => {
  const renderLatestNews = ({ ldata }) => {
    if (ldata) {
      return ldata.map((data) => {
        return (
          <Link to={`/details/${data.id}`} className="item" key={data.id}>
            <div
              className="image_cover"
              style={{ background: `url('/images/articles/${data.img}')` }}
            >
              <div className="description">
                <span>{data.category}</span>
                <div>{data.title}</div>
              </div>
            </div>
          </Link>
        );
      });
    }
  };
  return <div className="home-latest">{renderLatestNews(props)}</div>;
};

export default latestDisplay;
