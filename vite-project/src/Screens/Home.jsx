import React from "react";
import Button from "@mui/material/Button";
import Header from "../Component/Navigation/Header";
import image from "../assets/image1.jpeg";

function Home() {
  return (
      <div
        className="sm:w-[100%] sm:h-[100vh]"
        style={{
          width: "100%",
          height: "100vh",
          //   background: "peru",
          display: "flex",
          flexDirection: "column",
          // backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: 0.8,
        }}
      >
        {/* This is the first flex in column direction  */}
        <div
          style={{
            flex: ".15",
            // background: "red",
            display: "flex",
            flexDirection: "row",
            paddingTop: '17.5px'
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
            paddingTop: "-120%",
            backgroundImage: `url(${image})`,
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
            <div style={{ fontSize: "4em" }}>
              Your Convenient Style <p>Organizer</p>{" "}
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
  
  );
}

export default Home;
