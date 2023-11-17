import Image from "next/image";
import defaultImg from "../../../public/default.png";

type CastItemProps = {
  profile_path: string | null;
  name: string;
  character: string;
};

const CastItem = ({ cast }: { cast: CastItemProps }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-xs">
      <Image
        className="w-24 h-24 object-cover rounded-full mx-auto"
        src={
          cast.profile_path
            ? `https://image.tmdb.org/t/p/original/${cast.profile_path}`
            : defaultImg
        }
        alt={cast.name}
      />
      <h3 className="text-xl font-medium text-gray-800 text-center mt-4">
        {cast.name}
      </h3>
      <p className="text-sm text-gray-600 text-center mt-1">{cast.character}</p>
    </div>
  );
};

export default CastItem;
