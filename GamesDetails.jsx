const GamesDetails = ({ games }) => {
    if (!Array.isArray(games) || games.length === 0) return null;

    return (
        <>
            {games.map((game) => (
                <div className="Game-Details" key={game.id}>
                    <img src={game.thumbnail} />
                    <h3>{game.title}</h3>
                    <p>{game.short_description}</p>
                </div>
            ))}
        </>
    );
};

export default GamesDetails;