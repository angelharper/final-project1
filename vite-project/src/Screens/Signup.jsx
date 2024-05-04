import React from "react";
// import TextField from "@mui/material/TextField";
import TextField from '@mui/material/TextField';
import Header from "../Component/Navigation/Header";
import image from "../assets/image1.jpeg";

function Signup() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: "peru",
          display: "flex",
          flexDirection: "column",
          // backgroundImage: `url(${image})`,
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
            <div style={{ fontSize: "4em" }}>LOG IN</div>
            <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Enter Email"
        />
         <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Password"
        />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
