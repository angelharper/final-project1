import React from "react";
// import Button from "@mui/material/Button";
import Header from "../Component/Navigation/Header";
import image from "../assets/image1.jpeg";

function About() {
  return (
    
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: "peru",
          display: "flex",
          flexDirection: "column",
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        {/* This is the first flex in column direction  */}
        <div
          style={{
            flex: ".15",
            // background: "red",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Header />
        </div>
        {/* End of flex */}

        {/* This is the second flex in column direction  */}
        <div
          style={{
            flex: ".85",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "-180%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 40,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "4em" }}>About</div>
            <div style={{ fontSize: "1.4em" }}>
            This is a virtual wardrobe website inspired by modern-day lifestyle, where convenience, organization, and style intersect to meet the growing need for individuals to efficiently manage their clothing collections while staying on top of fashion trends. Style Wizard is the culmination of technology, fashion, and lifestyle needs, aiming to provide users with a convenient, organized, and fashion-forward solution for managing their clothing collections.
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default About;
