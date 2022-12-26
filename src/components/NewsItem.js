import React from "react";
import '../NewsItem.css'

function NewsItem(props) {

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.imgUrl} className="card-img-top imgSize" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <a
            href={props.newsUrl}
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
