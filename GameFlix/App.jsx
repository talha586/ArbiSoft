import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Playlist from "./pages/Playlist";
import Review from "./pages/Review";

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
