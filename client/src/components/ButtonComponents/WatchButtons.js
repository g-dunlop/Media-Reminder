const WatchButtons = ({addToUser, movie, listType}) => {

    const handleClick = (evt) => {

        const movieToAdd = {
            imdbID: movie.imdbID,
            Title: movie.Title,
            Poster: movie.Poster,
            Year: movie.Year,
            Type: movie.Type,
            Rating:movie.Rating
        }

        const list = evt.target.value;
        addToUser(movieToAdd, list)
        }

    

    return(

        <div>
            {listType === "watched" ? <button onClick={handleClick} value="removewatched">Remove from watched</button> : <button onClick={handleClick} value="watched">Watched</button>  }  
            {listType === "towatch" ? <button onClick={handleClick} value="removetowatch">Don't want to watch</button> : <button onClick={handleClick} value="towatch">Want to Watch</button>}
            
        </div>
    )
}

export default WatchButtons;