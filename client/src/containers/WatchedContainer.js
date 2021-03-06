import { useState } from "react";
import Movie from '../components/MoviesContainerComponents/Movie';

const Watched = ({user, setNewId, saveRating, removeFromUser, addToUser}) => {

    const [listType, setListType] = useState("watched")
  
    const movies = user[0].watched.map((movie, index) => {
        return <li><Movie key={index} movie={movie} setNewId={setNewId} listType={listType} saveRating={saveRating} removeFromUser={removeFromUser} addToUser={addToUser}/></li>
    })


    return(
        <main >
            <h2>Watched Movies</h2>
            <ul>
                {movies}
            </ul> 
        </main>
    )
}

export default Watched;