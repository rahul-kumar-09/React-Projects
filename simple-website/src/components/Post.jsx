import React from "react";

const Post = () => {
  const imgeSrc = "https://cdn-icons-png.flaticon.com/512/219/219988.png";
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={imgeSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
