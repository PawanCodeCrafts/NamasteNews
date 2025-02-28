import React from "react";

const NewsContent = (props) => {

  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div>
      <div className="card">
        <img
          src={
            !imageUrl
              ? "https://content.fortune.com/wp-content/uploads/2022/05/Kirthiga1.jpg?resize=1200,600"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <p className="card-text">{description}...</p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-color"
          >
            Read more..
          </a>
        </div>
      </div>
    </div>
  );

}

export default NewsContent;
