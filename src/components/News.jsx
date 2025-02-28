import React, { useState, useEffect } from "react";
import NewsContent from "./NewsContent";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchNews = async (page = 1) => {

    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?q=${props.country}&category=${props.category}&page=${page + 1}&pageSize=${props.pageSize}&apiKey=6f3c126f0c344a27818a9f668ef8b079`;
    let response = await fetch(url);
    let data = await response.json();

    if (data.status === "ok") {
      setArticles(data.articles);
      setTotalResults(data.totalResults);
      setPage(page);
      setLoading(false);
    } else {
      console.error("Error fetching news:", data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [props.category]); // Fetch news whenever category changes

  const handlePrevious = () => {
    if (page > 1) {
      fetchNews(page - 1);
    }
  };

  const handleNext = () => {
    if (page < Math.ceil(totalResults / props.pageSize)) {
      fetchNews(page + 1);
    }
  };

  return (
    <div className="container my-4">
      <h1 className="mb-4">
        NamasteNews - {props.category.charAt(0).toUpperCase() + props.category.slice(1)} News
      </h1>
      {loading && <Spinner />}
      <div className="row">
        {!loading &&
          articles.map((element, index) => (
            <div className="col-md-4 my-3" key={element.url || index}>
              <NewsContent
                title={element.title ? element.title.slice(0, 42) : "No Title"}
                description={element.description ? element.description.slice(0, 84) : "No Description"}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
              />
            </div>
          ))}
      </div>
      <div className="container d-flex justify-content-between">
        <button disabled={page <= 1} className="btn btn-dark" onClick={handlePrevious}>
          &larr; Previous
        </button>
        <button disabled={page >= Math.ceil(totalResults / props.pageSize)} className="btn btn-dark" onClick={handleNext}>
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
