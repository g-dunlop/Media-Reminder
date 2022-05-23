import {Outlet, Link} from "react-router-dom";

const AppContainer = () => {


    return(
        <div>
      
        <h1>Media Reminder</h1>
        <nav>
          <Link to="movies">Search Movies</Link>
          <Link to="watched">Watched</Link>
          <Link to="towatch">To Watch</Link>
        </nav>
        
        <Outlet />

      
      </div>
    )
}

export default AppContainer;