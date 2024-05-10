import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Inspiration from "./Screens/Inspiration";
import Signup from "./Screens/Signup";
import UploadWardrobe from "./Screens/UploadWardrobe";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/upload-wardrobe" element={<UploadWardrobe/>}/>
      </Routes>
  );
}

export default App;
