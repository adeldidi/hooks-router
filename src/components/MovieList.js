import { movies } from "../data/Movies";
import MovieCard from "./MovieCard";

export const MovieList = ({ data, deleteProduct, search }) => {
  const handleName = (title) => {
    alert(`Hello ${title} `);
  };

  const filteredData= data.filter((item)=>{return item.title.toLowerCase().includes(search.toLowerCase())})
  return (
    <div className="card-list">
      
      {filteredData.map((item) => {
        return (
         // <link to= {`/movies/${movies.id}`}>
          <MovieCard
          
            key={item.id}
            item={item}
            handleName={handleName}
            deletemovie={deleteProduct}
          />
          
        );
      })}
  
    </div>
  );
};
