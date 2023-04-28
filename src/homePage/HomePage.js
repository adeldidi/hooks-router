import Navbar from "../components/Navbar";
import { MovieList } from "../components/MovieList";
import { useState } from "react";
import { movies } from "../data/Movies";

const HomePage = () => {
  const pages = ["Movie", "Rating", "Blog"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [search, setSearch] = useState("");
  const [movielist, setmovielist] = useState(movies);
  const [newMovie, setnewMovie] = useState({
    title: "",
    rating: 0,
    posterURL: "",
    description: "",
    id: movielist.length + 1,
  });
  const handleChange = (e) => {
    setnewMovie({
      ...newMovie,
      [e.target.name]: e.target.value,
    });
  };
  const addMovie = (newMovie) => {
    setmovielist([...movielist, newMovie]);
  };
  console.log(movielist);
  const deletemovie = (id) => {
    setmovielist(movielist.filter((movies) => movies.id !== id));
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  console.log("newMovie", newMovie);

  return (
    <>
      <Navbar pages={["Movie", "Rating", "Blog"]} settings={pages} />
      <input
        type="Text"
        placeholder="Search"
        onChange={(e) => handleSearch(e)}
      ></input>
      <MovieList data={movielist} deleteProduct={deletemovie} search={search} />
      <label> title </label>
      <input type="text/" name="title" onChange={handleChange} />
      <label> Rating </label>
      <input type="number" name="rating" onChange={handleChange} />
      <label> posterURL </label>
      <input type="text" name="posterURL" onChange={handleChange} />
      <label> Description </label>
      <textarea name="description" onChange={handleChange} />
      <button onClick={() => addMovie(newMovie)}> Add Movie</button>
    </>
  );
};
export default HomePage;
