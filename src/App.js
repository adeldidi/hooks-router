import logo from "./logo.svg";
import "./App.css";
import HomePage from "./homePage/HomePage";
import { Route, Routes } from "react-router-dom";
import { Trailer } from "./homePage/trailer";
import { MoviesDetails } from "./homePage/MoviesDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MoviesDetails />} />
      
        <Route path="*" element={<h1> 404 Not Found </h1>} />
      </Routes>
    </>
  );
}

export default App;
