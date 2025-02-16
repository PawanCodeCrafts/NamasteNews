import React from "react";
import NewsContent from "./NewsContent";
import Spinner from "./Spinner";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?apiKey=6f3c126f0c344a27818a9f668ef8b079&q=india&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false });
  }
  handlePrevious = async () => {
    // console.log("helloprev");

    let url = `https://newsapi.org/v2/top-headlines?apiKey=6f3c126f0c344a27818a9f668ef8b079&q=india&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  handleNext = async () => {
    // console.log("hello next");

    let url = `https://newsapi.org/v2/top-headlines?apiKey=6f3c126f0c344a27818a9f668ef8b079&q=india&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container my-4">
        <h1 className="mb-4 h1">NamasteNews - Latest News Updates</h1>
        {this.state.loading && <Spinner />}
        <div className="row ">
          {!this.state.loading &&
            this.state.articles.map((element) => (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsContent
                  title={element.title ? element.title.slice(0, 42) : ""}
                  description={
                    element.description ? element.description.slice(0, 84) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            ))}
        </div>
        <div className="conatiner d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevious}
          >
            &larr; Previous
          </button>
          <button
            type="button"
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
