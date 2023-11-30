// IfoItem component
import Link from "next/link";

interface IfoItemProps {
  moviedetails: string;
}

export const IfoItem = ({ moviedetails }: IfoItemProps) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h4 className="text-2xl font-bold mb-4">Додаткова інформація</h4>
      <ul className="text-gray-800">
        <li className="mb-2">
          <Link
            href="/movies/[movieId]/cast"
            as={`/movies/${moviedetails}/cast`}
          >
            <div className="text-blue-700 font-semibold hover:underline">
              Акторський склад
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="/movies/[movieId]/reviews"
            as={`/movies/${moviedetails}/reviews`}
          >
            <div className="text-blue-700 font-semibold hover:underline">
              Відгуки
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};
