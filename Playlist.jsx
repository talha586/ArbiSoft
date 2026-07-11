import { useState, useEffect } from 'react'

const Playlist = () => {
    const urlData = 'https://www.freetogame.com/api/games';
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [isPending, setIsPending] = useState(true);
    const [allGames, setAllGames] = useState([]);
    const [relatedGames, setRelatedGames] = useState([]);
    
    useEffect(() => {
        fetch(urlData)
        .then(res => {
            if (!res.ok) {
                 throw Error('There is an Error in response');
            }
            return res.json();
        })
        .then(data => {
            const RepeatedGenres = data.map((x) => x.genre)
            const UniqueGenres = [...new Set(RepeatedGenres)]
            setAllGames(data);
            setGenres(UniqueGenres);
            setSelectedGenre('');
            setIsPending(false);
        })
        .catch(err => {
            console.error(err);
            setIsPending(false);
        })
    }, [])

    useEffect(() => {
        if(selectedGenre) {
            const filteredGames = allGames.filter(game => game.genre === selectedGenre);
            setRelatedGames(filteredGames);
        } else {
            setRelatedGames([]);
        }
    }, [selectedGenre, allGames])

    const handleGenre = (event) => {
        setSelectedGenre(event.target.value);
    }

    return (
        <div className = "Playlist-Container">
            <div>
                <h1 className = "Title-Container">Search PlayList</h1>
            </div>

            <div className="Playlist-Controls">
                <label htmlFor="Select-Genre" className="Genre-Label">Select A Genre :</label>
                <select id="Select-Genre" value={selectedGenre} onChange={handleGenre} className="Genre-Select">
                    <option value="">-- Select Genre --</option>
                    {genres.map((genre, index) => (
                        <option key={index} value={genre}>{genre}</option>
                    ))}
                </select>
            </div>

            {selectedGenre && (
                <div className="Games-Container">
                    {relatedGames.length > 0 ? (
                        relatedGames.map((game) => (
                            <div key={game.id} className="Game-Details">
                                <img src={game.thumbnail} alt={game.title} />
                                <h3>{game.title}</h3>
                                <p>{game.genre}</p>
                                <p>{game.platform}</p>
                            </div>
                        ))) : ( <p className="Empty-Text">No games found for this genre</p>)}
                </div>
            )}
        </div>
    )
}

export default Playlist;