import React, { Component } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=83ce76eddf244d31b2444b991092684d";
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({ articles: parsedData.articles });
    let data = await axios.get(url).then((response) => response.data);
    console.log(data);
    this.setState({ articles: data.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>

        <div className="row">
          {this.state.articles?.map((element) => {
            console.log(element);
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
