const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getTrendingMovies = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/movie/top_rated?language=en-US&api_key=${API_KEY}`
    );
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();

    // Limit the results to the top 10 movies
    const top10Movies = data.results.slice(0, 12);

    return top10Movies;
  } catch (error) {
    console.error("Error fetching top 10 movies:", error);
    throw error;
  }
};

//main one
export const getMovies = async (query) => {
  try {
    const res = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );

    if (!res.ok) {
      throw new Error(
        `Cannot fetch data from the server. Status: ${res.status}`
      );
    }

    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error occurred while fetching movies:", error);
    throw error;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);

    if (!res.ok) {
      throw new Error(`cannot to fetch movie details. Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error occurred while fetching movie details:", error);
    throw error;
  }
};
