
import { useEffect, useState } from "react";
import './App.css'
import SearchIcon from './search.svg';
import MovieCard from "./movieCard";

const movie1 = {
  
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "imdbID": "tt2975590",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"

}

const API_URL = 'http://omdbapi.com?apikey=de62f7d9'

const App = () => {
  const [movies , setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies("Superman");
  }, []);

  return (

    <div className="app">
      <h1>PicturePlace</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value = {searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}>


        </input>
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {
        movies?.length >0 
          ? (
            <div className="container">
        {movies.map((movie) => (
          <MovieCard movie = {movie} />
        ))}
      </div>
          ) :
          (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      }
      
    </div>

  );
}

export default App;
