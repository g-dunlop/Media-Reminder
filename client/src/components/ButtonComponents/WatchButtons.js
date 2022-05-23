const WatchButtons = ({addToUser, movie}) => {

    const handleClick = (evt) => {

        const movieToAdd = {
            imdbID: movie.imdbID,
            Title: movie.Title,
            Poster: movie.Poster,
            Year: movie.Year,
            Type: movie.Type
        }

        const list = evt.target.value;
        addToUser(movieToAdd, list)
        }

    


    return(

        <div>
            <button onClick={handleClick} value="watched">Watched</button>    
            <button onClick={handleClick} value="towatch">Want to Watch</button>
            
        </div>
    )
}

export default WatchButtons;