import { useState } from "react";
import Movie from '../components/MoviesContainerComponents/Movie';

const Watched = ({user, setNewId}) => {

  
    const movies = user[0].watched.map((movie, index) => {
        return <li><Movie key={index} movie={movie} setNewId={setNewId}/></li>
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