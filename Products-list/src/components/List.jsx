import React from "react";

const List = ({ data }) => {
  const IMG =
    "https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg";
  return (
    <div className="pro-list">
      <div className="myProduct px-5 text-center ">
        {data.map((item) => (
          <div className="card mb-5 d-inline-block m-5 text-center" style={{ width: "20rem" }}>
            <img
              src={item.thumbnail}
              style={{ width: "10rem", height: "10rem" }}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <a href="#" className="btn btn-primary">
                {item.price} $
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
