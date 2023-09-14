import Image from "next/image";
import { getTrendingMovies } from "@/utils/requests";
import Card from "./components/Card";
import Poster from "@/assets/Poster.png";
import vector1 from "@/assets/Vector1.png";
import vector2 from "@/assets/Vector2.png";
import vector3 from "@/assets/Vector3.png";
import vector4 from "@/assets/Vector4.png";
import Seemore from "@/assets/Seemore.png";
import IMBD from "@/assets/IMBD.png";
import Button from "@/assets/Button.png";

export default async function Home() {
  const movies = await getTrendingMovies();

  return (
    <div className="">
      <div className="w-full h-full relative mt-[-100px]">
        <Image src={Poster} alt="movie banner" />
        <div className="w-[50%] absolute mt-[-300px] ml-[30px] px-10">
          <h2 className="text-white font-bold text-[2rem]">
            John Wick 3: Parabellum
          </h2>
          <p className="text-white flex items-center gap-5">
            <Image src={IMBD} alt="banner icon" />
            <span className="text-sm">880/100</span>
          </p>
          <p className="text-white my-4">
            John Wick is on the run after killing a member of <br />
            the international assassins' guild, and with a $14 <br />
            million price tag on his head, <br /> he is the target of hit men
            and women everywhere.
          </p>
          <p>
            <Image src={Button} alt="banner icon" />
          </p>
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center gap-[820px]">
          <h1 className="flex justify-center items-center text-center font-semibold p-4 text-xl">
            Featured movie
          </h1>
          <p>
            <Image src={Seemore} alt="Social Icon" />
          </p>
        </div>
        <div className="flex flex-wrap gap-8 justify-center items-center px-8">
          {movies.map((movie) => {
            return <Card movie={movie} />;
          })}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mb-12 mt-[150px]">
        <div className="flex items-center justify-center gap-6">
          <p>
            <Image src={vector1} width={15} height={15} alt="Social Icon" />
          </p>
          <p>
            <Image src={vector2} width={15} height={15} alt="Social Icon" />
          </p>
          <p>
            <Image src={vector3} width={15} height={15} alt="Social Icon" />
          </p>
          <p>
            <Image src={vector4} width={15} height={15} alt="Social Icon" />
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 my-5">
          <p>Conditions of use</p>
          <p>Privacy & Policy</p>
          <p>Press Room</p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <p>&copy 2021 MovieBox by Adriana Eka Prayudha</p>
        </div>
      </div>
    </div>
  );
}
