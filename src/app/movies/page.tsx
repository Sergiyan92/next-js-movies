// pages/movies.js
"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Searchbar from "../../components/searchform/SearchForm";
import Link from "next/link";
import defaultImg from "../../../public/default.png";
import { getMovies } from "@/app/api/movies";

interface Movie {
  id: number;
  title: string;
  poster_path?: string;
}

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setMoviesError] = useState<string | null>(null);
  const router = useRouter();
  const params = useSearchParams();
  const query = params.get("query");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (query) {
          const { movieData } = await getMovies(query);
          const moviesWithPosterPath = movieData.map((movie: Movie) => ({
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path || "",
          }));
          setMovies(moviesWithPosterPath);
        }
      } catch (error) {
        if (typeof error === "string") {
          setMoviesError(error);
        } else {
          setMoviesError("An error occurred");
        }
      }
    };

    fetchMovies();
  }, [query]);

  const handleSubmit = (query: string) => {
    if (query === "") {
      alert("Please enter a query");
    } else {
      router.push(`/movies?query=${encodeURIComponent(query)}`);
      setMovies([]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Searchbar onSubmit={handleSubmit} />
      <ul className="flex flex-wrap pl-5 pr-5 justify-between">
        {movies.map((movie) => (
          <li
            className="border p-4 mb-5 w-[250px] text-center h-auto rounded-md"
            key={movie.id}
          >
            <Link href={`/movies/${movie.id}`} passHref>
              <div className="text-blue-500 hover:underline">
                <span className="text-lg">{movie.title}</span>
                <Image
                  className="mb-4"
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                      : defaultImg
                  }
                  alt={movie.poster_path || "Poster"}
                  width={466}
                  height={700}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {error && <p className="text-red-500">Sorry. {error} ... 😭</p>}
    </div>
  );
};

export default Movies;
