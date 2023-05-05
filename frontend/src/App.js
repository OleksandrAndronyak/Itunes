import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Favourites from "./components/favourites/Favourites";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [favourites, setFavourites] = useState(); // useState to save the list of favourites

  // Function to fetch the list of favourites
  const fetchFavourites = async () => {
    const result = await fetch("/api"); // Make the API call
    const data = await result.json(); // Change the result into json format
    setFavourites(data.favourites); // Save the data in 'favourites'
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes */}
          {/* Route to go to 'Home' */}
          <Route
            path="/"
            element={
              <Home fetchFavourites={fetchFavourites} favourites={favourites} />
            }
          />
          {/* Route to go to 'Favourites' */}
          <Route
            path="/favourites"
            element={
              <Favourites
                fetchFavourites={fetchFavourites}
                favourites={favourites}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
