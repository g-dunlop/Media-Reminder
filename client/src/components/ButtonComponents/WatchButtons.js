const WatchButtons = ({addToUser, removeFromUser, movie, listType, duplicate, feedback}) => {

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

    const handleRemoveClick = (evt) => {
        const movieID = movie.imdbID
        const list = evt.target.value

        removeFromUser(movieID, list)
       
    }

    

    return(

        <div>
            {listType === "watched" ? <button onClick={handleRemoveClick} value="watched">Remove from watched</button> : <button onClick={handleClick} value="watched">Watched</button>  }  
            {listType === "towatch" ? <button onClick={handleRemoveClick} value="towatch">Don't want to watch</button> : <button onClick={handleClick} value="towatch">Want to Watch</button>}
            {duplicate === true ? <p style={{color:"red"}}>Already added to list! </p> : null}
            {feedback === true ? <p style={{color:"blue"}}>Movied added to list!</p> : null}
        </div>
    )
}

export default WatchButtons;