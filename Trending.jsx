import { useState, useEffect } from "react";
import GamesDetails from "./GamesDetails";

const Trending = () => {
  const url = "https://www.freetogame.com/api/games";
  const [games, setGames] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("There is an Error in response");
        }
        return res.json();
      })
      .then((data) => {
        setGames(data);
        setIsPending(false);
      })
      .catch((err) => {
        console.error(err);
        setIsPending(false);
      });
  }, []);

  return (
    <div>
      <div>
        <h1 className="Title-Container">Trending Games</h1>
      </div>

      <div className="Games-Container">
        {isPending && <p className="Loading-Text">Loading games…</p>}
        {!isPending && games && <GamesDetails games={games} />}
        {!isPending && (!games || games.length === 0) && (
          <p className="Empty-Text">No games available.</p>
        )}
      </div>
    </div>
  );
};

export default Trending;
