/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Review from "../../../../components/review/Review";
import { getMovieIdReviews } from "@/app/api/movies";
import { useParams } from "next/navigation";

interface Reviews {
  id: number;
  author: string;
  content: string;
}

interface ReviewData {
  results: Reviews[];
}

const Reviews = () => {
  // const router = useRouter();
  const params = useParams();
  const { moviedetails } = useParams<{ moviedetails: string }>();
  const [data, setData] = useState<ReviewData | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        if (moviedetails) {
          const id = parseInt(moviedetails as string);
          const response = await getMovieIdReviews(id);
          setData(response);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, [moviedetails]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      {!data?.results.length ? (
        <p className="text-gray-800 text-xl text-center">
          We don't have any reviews for this movie
        </p>
      ) : (
        <div className="space-y-4">
          {data.results.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
