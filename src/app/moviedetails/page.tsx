// pages/movies/[movieId].js
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import CardItem from "../../components/card/CardItem";
import { IfoItem } from "../../components/info/InfoItem";
// import { getMovieId } from "../../service/service";

const MovieDetails = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const [details, setDetails] = useState(null);

  const back = useRef(router.query.state || "/");

  useEffect(() => {
    if (movieId) {
      const id = Array.isArray(movieId)
        ? parseInt(movieId[0])
        : parseInt(movieId);
      // getMovieId(id)
      //   .then((data) => setDetails(data))
      //   .catch((error) => console.log(error));
    }
  }, [movieId]);

  if (!details) return null;

  return (
    <div className="mx-auto p-4">
      <Link href={back.current.toString()}>
        <a className="text-blue-500 text-lg hover:underline mb-4 block">Back</a>
      </Link>
      <CardItem card={details} />
      <IfoItem />
    </div>
  );
};

export default MovieDetails;
