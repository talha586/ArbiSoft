import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Trending from "./Trending";
import Playlist from "./Playlist";
import Review from "./Review";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Trending" element={<Trending />} />
        <Route path="/Playlist" element={<Playlist />} />
        <Route path="/Review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
