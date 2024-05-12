import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/img1.jpg";
import { LoginContext } from "../../context/LoginContext";
import '../..//Screens/style.css'

function Header() {
  const { isLoggedIn, setIsLoggedIn, userName, setUserName } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Call your logout API here
    //...

    // If logout is successful
    setIsLoggedIn(false);
    setUserName("");
    navigate("/")
  };

  return (
    <>
      <div style={{ flex: 1, display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between",}}>
        {/* Logo, Navigation Bar and Signup */}
        <div
          style={{
            flex: "0 0 15%",
            //   background: "cyan",
            display: "flex",
            justifyContent: "space-between",
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
            flex: "0 0 60%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
            marginLeft: "20px"
          }}
        >
          {/* Navigations List */}
          <ul style={{ display: "flex", fontSize: 20, justifyContent: "space-between", gap: "20%" }}>
            <Link
              to="/"
              style={{ textDecoration: "none", color: "rgb(85,60,36)", fontWeight: "bold", fontSize: "28px" }}
            //   className="listStyle"
            >
              <li>HOME</li>
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "rgb(85,60,36)", fontWeight: "bold", fontSize: "28px" }}
            >
              <li>ABOUT</li>
            </Link>

            {isLoggedIn && (
              <Link
                to="/upload-wardrobe"
                style={{ textDecoration: "none", color: "rgb(85,60,36)", fontWeight: "bold", fontSize: "28px" }}>
                <li>WARDROBE</li>
              </Link>
            )}

            <Link
              to="/inspiration"
              style={{ textDecoration: "none", color: "rgb(85,60,36)", fontWeight: "bold", fontSize: "28px" }}
            >
              <li>INSPIRATION</li>
            </Link>
          </ul>
        </div>

        {/* Signup */}
        <div
          style={{
            flex: "0 0 25%",
            //   background: "pink",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isLoggedIn ? (
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
              <div >
                <li style={{ textDecoration: "none", color: "rgb(85,60,36)", fontSize: 20 }}>Welcome, {userName}</li>
              </div>
              <div>
                <button onClick={handleLogout} style={{marginLeft: "10px"}} className="logout-button">Logout</button>
              </div>
            </div>
          ) : (
            <div style={{ display: "flex",flexDirection: "row", justifyContent: "space-between", gap: 10}}>
              <Link
              to="/login"
              style={{ textDecoration: "none", color: "rgb(85,60,36)" }}
            >
              {/* <Button
                sx={{ fontSize: 15, width: "15vw", height: "6vh" }}
                variant="contained"
              >
                Login

              </Button> */}
              <button className="login-button">Login</button>
            </Link>
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "rgb(85,60,36)" }}
            >
              {/* <Button
                sx={{ fontSize: 15, width: "15vw", height: "6vh" }}
                variant="contained"
              >
                Login

              </Button> */}
              <button className="login-button">SignUp</button>
            </Link>
            </div>
            
          )

          }
        </div>
      </div>
    </>
  );
}

export default Header;
