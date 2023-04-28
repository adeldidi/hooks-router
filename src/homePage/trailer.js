import { movies } from "../data/Movies"

export const Trailer = () =>{
    return (
        <div>
        {movies.map((movie) =>(
        <div key= {movie.id}>
            <h1>{movie.name}</h1>
            <p> { movie.description}</p>
            {movie.trailerLink}
        </div>
         ) )
        }
        </div>
    );
}