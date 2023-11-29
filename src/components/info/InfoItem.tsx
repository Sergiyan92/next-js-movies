// IfoItem component
import Link from "next/link";

interface IfoItemProps {
  movieId: string;
}

export const IfoItem = ({ movieId }: IfoItemProps) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h4 className="text-2xl font-bold mb-4">Additional information</h4>
      <ul className="text-gray-800">
        <li className="mb-2">
          <Link href="/movies/[movieId]/cast" as={`/movies/${movieId}/cast`}>
            <div className="text-blue-700 font-semibold hover:underline">
              Cast
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="/movies/[movieId]/reviews"
            as={`/movies/${movieId}/reviews`}
          >
            <div className="text-blue-700 font-semibold hover:underline">
              Reviews
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};
