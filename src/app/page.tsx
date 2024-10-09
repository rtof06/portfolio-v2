import Image from "next/image";
import profilePicture from "../public/img/profile-picture.png";
import Skills from "@/components/Skills/Skills";
import { Pixelify_Sans } from "next/font/google";
import Header from "@/components/Header/Header";

const pixely = Pixelify_Sans({ subsets: ["cyrillic"], weight: ["400"] });

export default function Home() {
  return (
    <>
      <Header title="Olá! Bem-vindo ao meu portfólio" />
      <section className="container m-auto max-w-screen-lg">
        <div className="profile flex flex-col items-center text-center my-10">
          <Image
            src={profilePicture}
            alt="Foto do ricardo sorrindo"
            className="w-64 rounded-3xl"
          />
          <p className={`${pixely.className} text-3xl`}>Ricardo Tavares</p>
          <p className={`${pixely.className}`}>Desenvolvedor Web</p>
        </div>
        <Skills />
      </section>
    </>
  );
}
