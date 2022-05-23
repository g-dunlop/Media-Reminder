import WatchButtons from "../ButtonComponents/WatchButtons";

const MovieDetails = ({movie, addToUser}) => {
    return (
        <>
            <h4>{movie.Title}</h4> 
            <h3> {movie.Year}</h3>
            <p>Starring: {movie.Actors}</p>
            <p>Director: {movie.Director}</p>
            <img src={movie.Poster} />
            <p>{movie.Plot}</p>
            <h3>Ratings: imdb: {movie.Ratings[0].Value}  rotten tomatoes:{movie.Ratings[1].Value} metacritic: {movie.Ratings[2].Value}</h3>
            <p>Box Office: {movie.BoxOffice}</p>
            <WatchButtons addToUser={addToUser} movie={movie}/>
        </>
    )
}

export default MovieDetails;