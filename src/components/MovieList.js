import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(title, movies);

//   return (
//     <div className="p-4 space-y-4">

//       <h1 className="text-2xl font-bold mb-2">{title}</h1>

//       <div className="flex overflow-x-scroll scrollbar-hide">
        
//         <div className="flex">
//           {movies.map((movie) => (
//             <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );

return (
    <div className="p-4 space-y-4">
   
      <h1 className="text-2xl font-bold text-white mb-2">{title}</h1>
      
      
      <div className="flex overflow-x-scroll space-x-4 scrollbar-hide">
        {movies?.map((movie) => (
          <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
