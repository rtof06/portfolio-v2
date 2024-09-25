import Image from "next/image";
import profilePicture from "../public/img/profile-picture.png";
import NextLogo from "../public/img/NextJS.svg";
import ReactLogo from "../public/img/React.svg";
import TailwindLogo from "../public/img/Tailwind.svg";
import TypeScriptLogo from "../public/img/TypeScript.svg";
import { Krona_One } from "next/font/google";
import { Pixelify_Sans } from "next/font/google";
import Link from "next/link";

const krona = Krona_One({ subsets: ["latin"], weight: ["400"] });
const pixely = Pixelify_Sans({subsets: ["cyrillic"], weight:["400"]})

export default function Home() {
  return (
    <div className="container flex flex-col items-center">
      <h1 className={`${krona.className} text-5xl py-4`}>Olá! Bem-vindo ao meu Portfólio!</h1>
      <div className="profile text-center my-4">
        <Image src={profilePicture} alt="Foto do ricardo sorrindo" className="w-80 rounded-3xl"/>
        <p className={`${pixely.className} text-3xl`}>Ricardo Tavares</p>
        <p className={`${pixely.className}`}>Desenvolvedor Web</p>
        <div className="skills flex gap-4 justify-center p-5">
          <Image src={ReactLogo} alt="React Logo" className="w-12"/>
          <Image src={NextLogo} alt="Next Logo" className="w-12"/>
          <Image src={TailwindLogo} alt="Tailwind Logo" className="w-12"/>
          <Image src={TypeScriptLogo} alt="TypeScript Logo" className="w-12"/>
        </div>
      </div>
      <Link href="/projects" className={`${krona.className} text-3xl`}>Conheça meus projetos!</Link>
    </div>
  );
}
