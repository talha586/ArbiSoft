import { useState, useEffect } from 'react';
import GamesDetails from '../components/GamesDetails';
import { getGames } from '../api/gamesApi';

const Trending = () => {
  const [games, setGames] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    getGames()
      .then(setGames)
      .catch(console.error)
      .finally(() => setIsPending(false));
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
