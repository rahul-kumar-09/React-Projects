import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const SingleItem = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  return (
    <div className="myProduct px-5 ">
      {product ? (
        <div
          key={product.id}
          className="card mb-5  m-5 text-center "
          style={{
            width: "80%",
            minWidth: "20rem",
            display: "flex",
            flexDirection: "row",
            height: "50%",
          }}
        >
          <div className="card-img-top ">
            <img
              src={product.thumbnail}
              style={{ width: "10rem", height: "10rem" }}
              className="card-img-top "
              alt="..."
            />
          </div>
          <div className="card-body ">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <a href="#" className="btn btn-primary">
              {product.price} $
            </a>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default SingleItem;
