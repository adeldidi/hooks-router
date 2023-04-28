import { useParams } from "react-router-dom";
import { movies } from "../data/Movies";

export const MoviesDetails=()=>{
    const { id } = useParams();
    
    const findmovie = movies.find((movie) => movie.id === parseInt(id));
    return(
    <div>
        <h1>{findmovie.name}</h1>
            <p> { findmovie.description}</p>
            {findmovie.trailerLink}

    </div>
    )
}