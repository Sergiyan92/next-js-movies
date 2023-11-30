"use client";
import { useState, useEffect } from "react";
import CastItem from "../../../../components/cast/CastItem";
import { getCast } from "@/app/api/movies";
import { useParams, useRouter } from "next/navigation";

interface Cast {
  id: number;
  profile_path: string | null;
  name: string;
  character: string;
}

interface CastData {
  cast: Cast[];
}

const Cast = () => {
  const params = useParams();
  const { moviedetails } = useParams<{ moviedetails: string }>();

  const [data, setData] = useState<CastData | null>(null);

  useEffect(() => {
    if (moviedetails) {
      const id = parseInt(moviedetails);
      console.log(id);
      getCast(id)
        .then((data) => setData(data))
        .catch((error) => console.error(error));
    }
  }, [moviedetails]);

  return (
    <div className="container mx-auto p-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.cast.map((cast) => (
          <li key={cast.id} className="p-4 rounded-md">
            <CastItem cast={cast} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
