import React from "react";
import { useState } from "react";
import Header from "../Component/Navigation/Header";
import Boxes from "../Component/Boxes/Boxes";
import image1 from "../assets/pics/dress1.jpg";
import image2 from "../assets/pics/dress2.jpg";
import image3 from "../assets/pics/One.jpeg";
import image4 from "../assets/pics/num2.jpeg";
import image5 from "../assets/pics/dress7.jpg";
import image6 from "../assets/pics/dress6.jpg";
import image from "../assets/image1.jpeg";
import BasicModal from "../Component/Modal/Modal";
//
import img1 from "../assets/pics/img7.jpg";
import img2 from "../assets/pics/imgA.jpg";
import img3 from "../assets/pics/img6.jpg";
import img4 from "../assets/pics/img1.jpg";
import img5 from "../assets/pics/img2.jpg";
import img6 from "../assets/pics/img4.jpg";

function Inspiration() {
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleImageChange = (event) => {
    const files = event.target.files;
    const previews = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file) {
        const reader = new FileReader();
        reader.onload = function () {
          previews.push(reader.result);
          setImagePreviews([...previews]);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "160vh",
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flex: ".1",
            // background: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Header />
        </div>

        {/* Flex in columns */}
        <div
          style={{
            flex: ".7",
            // background: "yellow",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/*  */}
          <div
            style={{
              flex: ".2",
              // background: "cyan",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>Categories</h1>
          </div>
          <div
            style={{
              flex: ".8",
              display: "flex",
              flexWrap: "wrap",
              padding: "15px",
              flexDirection: "row",
              gap: 30,
              justifyContent: "center",
            }}
          >
            <BasicModal
              image={image1}
              firstImage={img1}
              content=" Casual Day look"
            />
            <BasicModal
              image={image2}
              firstImage={img2}
              content=" Semi formal look"
            />
            <BasicModal
              image={image3}
              firstImage={img3}
              content=" Date Night look"
            />
            <BasicModal
              image={image4}
              firstImage={img4}
              content=" French look"
            />
            <BasicModal
              image={image5}
              firstImage={img5}
              content=" Chic look"
            />
            <BasicModal
              image={image6}
              firstImage={img6}
              content=" Elegant look"
            />
          </div>
        </div>

        {/* Flex in columns */}
        <div style={{ flex: ".2", padding: "10px" }}>
          {/* ===================== */}

          <form
            id="uploadForm"
            //   action="upload.php"
            method="post"
            encType="multipart/form-data"
          >
            {/* <label htmlFor="imageUpload">Select images:</label> */}
            <input
              type="file"
              id="imageUpload"
              name="imageUpload"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
            {/* <input type="submit" value="Upload" /> */}
          </form>
          <div id="preview">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                overflow: "scroll",
              }}
            >
              {imagePreviews.map((preview, index) => (
                <img
                  width="20%"
                  height="200vh"
                  key={index}
                  src={preview}
                  alt={`Image Preview ${index}`}
                />
              ))}
            </div>
          </div>
          {/* =================== */}
        </div>
      </div>
    </>
  );
}

export default Inspiration;
