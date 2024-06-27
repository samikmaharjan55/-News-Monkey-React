import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://www.reuters.com/resizer/v2/UWNRNJBIZNOGVO7R3CRZRHT3U4.jpg?auth=67978678f9576c83850d33c9925cff5b7abf9a1532959341f1abb2e07992f1bb&height=1005&width=1920&quality=80&smart=true"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsdetail" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
