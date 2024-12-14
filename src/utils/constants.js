// export const LOGO =
//     "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://images.statusfacebook.com/profile_pictures/funny/funny_profile_pictures_24.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+ process.env.REACT_APP_TMDB_KEY,
  },
};

export const POSTER_IMG_CDN_URL = "https://image.tmdb.org/t/p/w300";

// export const BACKDROP_IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "french", name: "French" },
];

export const EMPTY_MOVIE_POSTER = "https://thumbs.dreamstime.com/b/cinema-festival-flyer-poster-vector-illustration-film-industry-movie-reel-clapper-board-template-your-design-89466440.jpg"


