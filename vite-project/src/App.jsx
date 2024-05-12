import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, {useState} from 'react';
import Home from "./Screens/Home";
import About from "./Screens/About";
import Inspiration from "./Screens/Inspiration";
import Signup from "./Screens/Signup";
import Login from "./Screens/Login";
import UploadWardrobe from "./Screens/UploadWardrobe";
import { LoginContext } from "./context/LoginContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, userName, setUserName}}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/inspiration" element={<Inspiration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/upload-wardrobe" element={<UploadWardrobe/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </LoginContext.Provider>
    
      
  );
}

export default App;
