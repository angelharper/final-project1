import React from "react";

function Boxes({ image }) {
  return (
    <>
      <div
        style={{
          width: "30vw",
          height: "40vh",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "10px",
        }}
      ></div>
    </>
  );
}

export default Boxes;
