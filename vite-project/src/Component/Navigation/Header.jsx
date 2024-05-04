import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import image from "../../assets/img1.jpg";

function Header() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        {/* Logo, Navigation Bar and Signup */}
        <div
          style={{
            flex: ".3",
            //   background: "cyan",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <div
            style={{
              width: "15vw",
              height: "10vh",
              backgroundImage: `url(${image})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>

        {/* Navigation */}
        <div
          style={{
            flex: ".4",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Navigations List */}
          <ul style={{ display: "flex", gap: 30, fontSize: 20 }}>
            <Link
              to="/"
              style={{ textDecoration: "none", color: "rgb(85,60,36)" }}
              //   className="listStyle"
            >
              <li>HOME</li>
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "rgb(85,60,36)" }}
            >
              <li>ABOUT</li>
            </Link>

            <Link
              to="/inspiration"
              style={{ textDecoration: "none", color: "rgb(85,60,36)" }}
            >
              <li>INSPIRATION</li>
            </Link>
          </ul>
        </div>

        {/* Signup */}
        <div
          style={{
            flex: ".3",
            //   background: "pink",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {/* SignUp List */}
          <Link
              to="/signup"
              style={{ textDecoration: "none", color: "rgb(85,60,36)" }}
            >
          <Button
            sx={{ fontSize: 15, width: "15vw", height: "6vh" }}
            variant="contained"
          >
            Sign Up
            
          </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
