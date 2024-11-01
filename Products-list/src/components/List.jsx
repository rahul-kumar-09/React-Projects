import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const List = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("https://dummyjson.com/products").then((result) => {
        result.json().then((res) => {
          const reqest = res.products;
          setData(reqest);
        });
      });
    }, []);

  const IMG =
    "https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg";
  return (
    <div className="pro-list">
      {data ? (
        <div className="myProduct px-5 text-center ">
          {data.map((item) => (
            <Link to={`/products/${item.id}`}>
              <div
                key={item.id}
                className="card mb-5 d-inline-block m-5 text-center"
                style={{ width: "20rem", cursor: "pointer" }}
              >
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
            </Link>
          ))}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default List;
