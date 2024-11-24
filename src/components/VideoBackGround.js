
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackGround = ({ movieId }) => {

    // below custom hook will get trailer video & put on redux store
    useMovieTrailer(movieId)
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);


    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <iframe
                className="absolute w-full aspect-video object-cover z-0 scale-[1.4] "
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            

        </div>
    );
};

export default VideoBackGround;

// h-full object-cover
