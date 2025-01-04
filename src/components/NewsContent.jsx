import React from "react";

class NewsContent extends React.Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
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
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-warning"
            >
              Read more..
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsContent;
