import Heder from "@/components/header/Heder";
import HomePage from "./home/page";

export default function Home() {
  return (
    <div className="flex flex-col container ml-auto mr-auto justify-center pt-5">
      <Heder />
      <HomePage />
    </div>
  );
}
