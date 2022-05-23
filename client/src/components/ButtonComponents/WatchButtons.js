const WatchButtons = ({addToWatched, addToToWatch, movie}) => {

    const handleClick = (evt) => {

        if (evt.target.value === "watched"){
            addToWatched(movie);
        } else{
            addToToWatch(movie);
        }
        }

    


    return(

        <div>
            <button onClick={handleClick} value="watched">Watched</button>    
            <button onClick={handleClick} value="towatch">Want to Watch</button>
            
        </div>
    )
}

export default WatchButtons;