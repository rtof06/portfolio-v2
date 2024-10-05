import Image from "next/image";
import profilePicture from "../public/img/profile-picture.png";
import NextLogo from "../public/img/NextJS.svg";
import ReactLogo from "../public/img/React.svg";
import TailwindLogo from "../public/img/Tailwind.svg";
import TypeScriptLogo from "../public/img/TypeScript.svg";
import { Pixelify_Sans } from "next/font/google";
import Header from "@/components/Header/Header";

const pixely = Pixelify_Sans({ subsets: ["cyrillic"], weight: ["400"] });

export default function Home() {
  return (
    <>
      <Header title="Olá! Bem-vindo ao meu portfólio"/>
      <div className="container mx-auto max-w-screen-lg">
        <div className="profile flex flex-col items-center text-center my-4">
          <Image
            src={profilePicture}
            alt="Foto do ricardo sorrindo"
            className="w-48 rounded-3xl"
          />
          <p className={`${pixely.className} text-3xl`}>Ricardo Tavares</p>
          <p className={`${pixely.className}`}>Desenvolvedor Web</p>
          </div>
          <div className="skills flex gap-4 justify-center">
            <Image src={ReactLogo} alt="React Logo" className="w-12" />
            <Image src={NextLogo} alt="Next Logo" className="w-12" />
            <Image src={TailwindLogo} alt="Tailwind Logo" className="w-12" />
            <Image
              src={TypeScriptLogo}
              alt="TypeScript Logo"
              className="w-12"
            />
        </div>
      </div>
    </>
  );
}
