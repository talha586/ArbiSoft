const Home = () => {
    return(
        <div className="Home-Container">
            <div>
                <h1 className="Title-Container">GameFlix</h1>
            </div>

            <div className="Trending-Div">
                <div>
                    <h2 className="Card-Title">Trending</h2>
                    <p className="Card-Subtitle">Popular games right now</p>
                </div>
            </div>

            <div className="Playlist-Div">
                <div>
                    <h2 className="Card-Title">Playlist</h2>
                    <p className="Card-Subtitle">Your favorite game picks</p>
                </div>
            </div>

            <div className="Review-Div">
                <div>
                    <h2 className="Card-Title">Review</h2>
                    <p className="Card-Subtitle">See game feedback and ratings</p>
                </div>
            </div>
        </div>
    )
}

export default Home;