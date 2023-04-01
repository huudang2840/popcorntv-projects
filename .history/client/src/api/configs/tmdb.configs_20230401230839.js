const mediaType = {
  movie: "movie",
  tv: "tv",
};

const mediaCategory = {
  popular: "popular",
  top_rated: "top_rated",
};

const backdropPath = (imgEndpoint) => `https://iamge.tmdb.org/t/p/original${imgEndpoint}`;

const posterPath = (imgEndpoint) => `https://iamge.tmdb.org/t/p/w500`;
