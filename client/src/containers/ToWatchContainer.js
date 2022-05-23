import UserContext from '../context/UserContext';
import { useContext, useEffect, useState } from 'react';
import Movie from '../components/MoviesContainerComponents/Movie';

const ToWatch = ({user, setNewId}) => {

    // const {user} = useContext(UserContext);
    
    // console.log(user)


    const movies = user[0].towatch.map((movie, index) => {
        return <li><Movie key={index} movie={movie} setNewId={setNewId}/></li>
    })

    return(
        <main >
            <h2>Movies To Watch</h2>
            <ul>
                {movies}
            </ul> 
        </main>
    )
}

export default ToWatch;