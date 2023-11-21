// pages/api/movies.ts
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
interface getImageProps {
  page: number;
  query: string;
}
interface imagesData {
  id: number;
  webformatURL: string;
  largeImageURL: string;
}
type Movie = {
  id: number;
  title: string;
  poster_path: string;
};
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzBjM2Q3N2ZiNjkwMzViNDdlYTRjYmUwYmYzZWM1OSIsInN1YiI6IjY0N2M4MmZlY2Y0YjhiMDBjM2QyYjEyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GuJ4Ukill7vzS2qgRjDdTLXHToQTjbtbSSxv_l3b6Pc",
  },
};

export const getMovies = async (query: string) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  const response = await axios(url, options);
  const movies = response.data.results.map(
    ({ id, title, poster_path }: Movie) => ({
      id,
      title,
      poster_path,
    })
  );

  return {
    movieData: movies,
  };
};

export const getAllMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const response = await axios(url, options);
  const trending = response.data.results.map(
    ({ id, title, poster_path }: Movie) => ({
      id,
      title,
      poster_path,
    })
  );

  return {
    trendingData: trending,
  };
};

export const getMovieId = async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const { data } = await axios(url, options);

  return data;
};

export const getCast = async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  const { data } = await axios(url, options);

  return data;
};

export const getMovieIdReviews = async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`;
  const { data } = await axios(url, options);

  return data;
};

export const getImages = async ({ page, query }: getImageProps) => {
  const response = await axios.get(`&q=${query}&page=${page}&per_page=12`);
  const images = response.data.hits.map(
    ({ id, webformatURL, largeImageURL }: imagesData) => ({
      id,
      webformatURL,
      largeImageURL,
    })
  );
  const total = response.data.totalHits;

  return {
    imagesData: images,
    totalImages: total,
  };
};
