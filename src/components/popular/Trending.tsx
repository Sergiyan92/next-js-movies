import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllMovies } from "../.././app/api/movies";
import defaultImg from "../../../public/default.png";
import Image from "next/image";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

type TrendingProps = {
  trending: Movie[];
};

const Trending = ({ trending }: TrendingProps) => {
  const [error, setMoviesError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const fetchMovies = async () => {
        await getAllMovies();
      };
      fetchMovies();
    } catch (error) {
      if (typeof error === "string") {
        setMoviesError(error);
      } else {
        setMoviesError("An error occurred");
      }
    }
  }, []);

  return (
    <>
      <ul className="flex flex-wrap pl-5 pr-5 justify-between">
        {trending.map((movie) => {
          return (
            <li
              className="border p-4 mb-5  text-center h-auto rounded-md"
              key={movie.id}
            >
              <Link
                href={`/movies/${movie.id}`}
                className="text-blue-500 hover:underline"
              >
                <span className="text-lg text-center">{movie.title}</span>
                <Image
                  className="mb-4"
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                      : defaultImg
                  }
                  alt={movie.poster_path}
                  priority
                  quality={100}
                  width={300}
                  height={500}
                />
              </Link>
            </li>
          );
        })}
        {error && <p className="text-red-500">Sorry. {error} ... 😭</p>}
      </ul>
    </>
  );
};

export default Trending;
