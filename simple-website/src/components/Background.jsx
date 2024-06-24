import React from "react";
import Post from "./Post";

const Background = () => {
  return (
    <div className="bg-container">
      <img
        src="https://wallpapers.com/images/hd/coding-background-zmygixkpkncbe0hs.jpg"
        className="bg-img"
        alt=""
      />

      <div className="bg-paragraph">
        <p>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      <div className="bg-cards">
        <Post />
        <Post />
        <Post />
      </div>

      <div className="divided-border">
        <h2>NEW SUBSCRIBER DEAL </h2>
        <h1>25% OFF</h1>
      </div>

      <div className="read-here">
        <h3>Want custom domains?</h3>
        <p>You can also buy a domain or connect an existing one.</p>
        <h3 className="user-text">Looking to add multiple users?</h3>
        <p className="text-color">Read here for how to get in touch</p>
      </div>
    </div>
  );
};

export default Background;
