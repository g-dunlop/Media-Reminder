import './App.css';
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import MoviesContainer from './containers/MoviesContainer';
import MovieDetailContainer from './containers/MovieDetailContainer';

import StockService from './services/StockServices';
import UserContext from './context/UserContext';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Watched from "./containers/WatchedContainer";
import ToWatch from "./containers/ToWatchContainer";
import Movies from "./containers/MoviesContainer"
import AppContainer from './containers/AppContainer';


function App() {

  const [user, setUser] = useState(null)
  

  useEffect(() => {
    fetchDB()
  }, [])

  
  const fetchDB = function(){
    fetch('http://localhost:9000/api/userMovies/')
    .then(res => res.json())
    .then(data => setUser(data))
}

  return (
    <>

    <BrowserRouter>
 
    {/* <UserContext.Provider value={user}> */}
      <Routes>
        <Route path="/" element={<AppContainer />} >
          <Route path="movies" element={<Movies />} >  
          </Route>
          <Route path="/movies/:imdbId" element={<MovieDetailContainer />} />
          <Route path="watched" element={<Watched  user={user} />} />
          <Route path="towatch" element = {<ToWatch user={user} />} />
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