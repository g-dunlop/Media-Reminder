import './App.css';
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import MoviesContainer from './containers/MoviesContainer';
import MovieDetailContainer from './containers/MovieDetailContainer';

import MovieService from './services/MovieService';
import UserContext from './context/UserContext';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Watched from "./containers/WatchedContainer";
import ToWatch from "./containers/ToWatchContainer";
import Movies from "./containers/MoviesContainer"
import AppContainer from './containers/AppContainer';


function App() {

  const [user, setUser] = useState(null)
  const [Id, setId] = useState(null)
  

  useEffect(() => {
    fetchDB()
  }, [])


  const fetchDB = function(){
    fetch('http://localhost:9000/api/userMovies/')
    .then(res => res.json())
    .then(data => setUser(data))
}

  const setNewId = (imdbId) => {
    setId(imdbId)
  }

  const addToUser = (movie, list) => {
    console.log(movie)
    const temp = {...user[0]}
    temp[list].push(movie)
    MovieService.updateUser(temp)
    .then(() => fetchDB())
  }

  const removeFromUser = (movieID, list) => {
    console.log(movieID)
    const temp = {...user[0]}
    console.log(temp[list])
    for (let i=0; i<temp[list].length; i++){
      if(movieID === temp[list][i].imdbID){
        temp[list].splice(i, 1);
      }
  }
    MovieService.updateUser(temp)
    .then(() => fetchDB())
}


  const saveRating = (movie) => {
    console.log(movie)
    const temp = {...user[0]}
    for (let i=0; i<temp.watched.length; i++){
      if(movie.Title === temp.watched[i].Title){
        temp.watched[i].Rating = movie.Rating
      }
    }
    
    MovieService.updateUser(temp)
    .then(() => fetchDB())
  }


  return (
    <>

    <BrowserRouter>
 
    {/* <UserContext.Provider value={user}> */}
      <Routes>
        <Route path="/" element={<AppContainer />} >
          <Route path="movies" element={<Movies addToUser={addToUser} saveRating={saveRating}/>} >  
          </Route>
          <Route path="/movies/:imdbId" element={<MovieDetailContainer addToUser={addToUser} />} />
          <Route path="watched" element={<Watched  user={user} setNewId={setNewId} saveRating={saveRating} removeFromUser={removeFromUser} addToUser={addToUser}/>} />
            <Route path="/watched/:imdbId" element={<Navigate to={`/movies/${Id}`} />} /> 
            {/* <Route path="watched/towatch" element={<Navigate to={"towatch"} />} /> */}
          <Route path="towatch" element = {<ToWatch user={user} setNewId={setNewId} removeFromUser={removeFromUser} addToUser={addToUser}/>} />
            <Route path="/towatch/:imdbId" element={<Navigate to={`/movies/${Id}`} />} />
          <Route path="*" element={
            <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
          } />
        </Route>
      </Routes>
     
      {/* </UserContext.Provider> */}
  </BrowserRouter>
      
      
    

    {/* <Router>
      <Routes>
        <Route path="/" element={<MoviesContainer getMovie={getMovie}/>} />
        <Route path="/detail" element={<MovieDetailContainer render = {(selectedMovie) => ({selectedMovie})}  />} />
      </Routes>
    </Router> */}
      
    </>
  );
}

export default App;