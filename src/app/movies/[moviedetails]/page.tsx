"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import CardItem from "../../../components/card/CardItem";
import { getMovieId } from "@/app/api/movies";
import Cast from "./cast/page";
import Reviews from "./reviews/page";

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
  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  useEffect(() => {
    if (moviedetails) {
      const id = parseInt(moviedetails);
      console.log(id);
      getMovieId(id)
        .then((data) => setDetails(data))
        .catch((error) => console.log(error));
    }
  }, [moviedetails]);

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };
  const handleGoBack = () => {
    router.back();
  };

  if (!details) return;

  return (
    <div className="mx-auto p-4">
      <button
        onClick={() => handleGoBack()}
        className="text-blue-700 font-semibold hover:underline mr-2"
      >
        Back
      </button>
      <CardItem card={details} />
      <h4 className="text-2xl font-bold mb-4">Additional information</h4>
      <div className="mb-4">
        <button onClick={() => handleTabChange("cast")}>
          <span className="text-blue-700 font-semibold hover:underline mr-2">
            Cast
          </span>
        </button>
        <button onClick={() => handleTabChange("reviews")}>
          <span className="text-blue-700 font-semibold hover:underline">
            Reviews
          </span>
        </button>
      </div>
      {selectedTab === "cast" && <Cast />}
      {selectedTab === "reviews" && <Reviews />}
    </div>
  );
};

export default MovieDetails;
