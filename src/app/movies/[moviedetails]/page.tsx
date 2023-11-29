"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import CardItem from "../../../components/card/CardItem";
import { IfoItem } from "../../../components/info/InfoItem";
import { getMovieId } from "@/app/api/movies";

type MovieDetails = {
  moviedetails: string;
  backdrop_path: string | null;
  original_title: string;
  overview: string;
  genres: Genre[];
};

type Genre = {
  id: number;
  name: string;
};
const MovieDetails = () => {
  const router = useRouter();

  const { moviedetails } = useParams<{ moviedetails: string }>();
  const [details, setDetails] = useState<MovieDetails | null>(null);

  const back = useRef(router.back || "/");

  useEffect(() => {
    if (moviedetails) {
      const id = parseInt(moviedetails);
      console.log(id);
      getMovieId(id)
        .then((data) => setDetails(data))
        .catch((error) => console.log(error));
    }
  }, [moviedetails]);

  if (!details) return;

  return (
    <div className="mx-auto p-4">
      <Link href={back.current.toString()}>
        <div className="text-blue-500 text-lg hover:underline mb-4 block">
          Back
        </div>
      </Link>
      <CardItem card={details} />
      <IfoItem movieId={moviedetails} />
    </div>
  );
};

export default MovieDetails;
