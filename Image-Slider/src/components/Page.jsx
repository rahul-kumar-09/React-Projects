import React from "react";

const Page = () => {
  const img1 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmsbxSm-9IKrCVj24vL_J20Wmhfm3F-HXIOQ&s";

  const img2 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3-AFMn2ahL8ff-rlmzwEMAnpMUKoqfYvtOA&s";

  const img3 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz3ZAVqtRgPHFqCSVkYLELMHgOo1xANXpiZw&s";

  const images = [img1, img2, img3];

  return (
    <div className="page-container">
      <div className="content">
        <div className="prev"></div>
        <div className="slide-panel">
          {images.map((image) => {
            return (
              <img  src={image} />
            );
          })}
        </div>
        <div className="next"></div>
      </div>
    </div>
  );
};

export default Page;
