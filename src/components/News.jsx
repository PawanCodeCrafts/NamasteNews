import React from "react";
import NewsContent from "./NewsContent";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

class News extends React.Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async fetchNews(page = 1) {
    try {
      this.setState({ loading: true });

      let url = `https://newsapi.org/v2/top-headlines?q=${this.props.country}&category=${this.props.category}&page=${page}&pageSize=${this.props.pageSize}&apiKey=6f3c126f0c344a27818a9f668ef8b079`;

      let response = await fetch(url);
      let data = await response.json();

      if (data.status === "ok") {
        this.setState({
          articles: data.articles,
          totalResults: data.totalResults,
          page: page,
          loading: false,
        });
      } else {
        console.error("Error fetching news:", data);
        this.setState({ loading: false });
      }
    } catch (error) {
      console.error("Network error:", error);
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.fetchNews();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.fetchNews(1); // Reset to page 1 when category changes
    }
  }

  handlePrevious = () => {
    if (this.state.page > 1) {
      this.fetchNews(this.state.page - 1);
    }
  };

  handleNext = () => {
    if (
      this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      this.fetchNews(this.state.page + 1);
    }
  };

  render() {
    return (
      <div className="container my-4">
        <h1 className="mb-4">
          NamasteNews -{" "}
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}{" "}
          News
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element, index) => (
              <div className="col-md-4 my-3" key={element.url || index}>
                <NewsContent
                  title={
                    element.title ? element.title.slice(0, 42) : "No Title"
                  }
                  description={
                    element.description
                      ? element.description.slice(0, 84)
                      : "No Description"
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevious}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page >=
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
