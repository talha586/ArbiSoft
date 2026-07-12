import { useState, useEffect } from "react";

const Review = () => {
  const url = "https://www.freetogame.com/api/games";
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Error in response");
        }
        return res.json();
      })
      .then((data) => {
        setGames(data);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, []);

  const handleChange = (event) => {
    setSelectedGame(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      game: selectedGame,
      email,
      review,
    };

    console.log("Review submitted:", payload);
    setSelectedGame("");
    setEmail("");
    setReview("");
  };

  return (
    <div className="Review-Container">
      <div>
        <h1 className="Title-Container">Submit Review</h1>
      </div>

      <form className="Review-Controls" onSubmit={handleSubmit}>
        <label htmlFor="Select-Game" className="Review-Label">
          Select Game :
        </label>
        <select
          id="Select-Game"
          value={selectedGame}
          onChange={handleChange}
          className="Review-Select"
        >
          <option value="">-- Select Game --</option>
          {games.map((game) => (
            <option key={game.id} value={game.title}>
              {game.title}
            </option>
          ))}
        </select>

        <label htmlFor="Review-Email" className="Review-Label">
          Email :
        </label>
        <input
          id="Review-Email"
          className="Review-Input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="Review-Text" className="Review-Label">
          Review :
        </label>
        <textarea
          id="Review-Text"
          className="Review-Textarea"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review"
          rows="6"
          required
        />

        <button type="submit" className="Review-Button">
          Submit Review
        </button>

        {isPending && <p className="Empty-Text">Loading games...</p>}
        {error && <p className="Empty-Text">{error}</p>}
      </form>
    </div>
  );
};

export default Review;
