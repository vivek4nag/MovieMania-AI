import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MovieTrailer = () => {
  const { id } = useParams();

  const movieTrailer = useSelector((store) => store.movies.trailerVideo);

  useMovieTrailer(id);

  return (
    <div>
      {movieTrailer ? (
        <>
          <div>
            <iframe
              src={`https://www.youtube.com/embed/${movieTrailer?.key}`}
              title="yt trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </>
      ) : (
        <>
          <div>
            <h3>Trailer not found</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieTrailer;
