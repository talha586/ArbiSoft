import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home-Container">
      <div>
        <h1 className="Title-Container">GameFlix</h1>
      </div>
      <Link to="/Trending" style={{ textDecoration: "none" }}>
        <div className="Trending-Div">
          <div>
            <h2 className="Card-Title">Trending</h2>
            <p className="Card-Subtitle">Popular games right now</p>
          </div>
        </div>
      </Link>

      <Link to="/Playlist" style={{ textDecoration: "none" }}>
        <div className="Playlist-Div">
          <div>
            <h2 className="Card-Title">Playlist</h2>
            <p className="Card-Subtitle">Check different genres games</p>
          </div>
        </div>
      </Link>

      <Link to="/Review" style={{ textDecoration: "none" }}>
        <div className="Review-Div">
          <div>
            <h2 className="Card-Title">Review</h2>
            <p className="Card-Subtitle">Give review to games</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
