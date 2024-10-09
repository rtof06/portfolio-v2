import Header from "@/components/Header/Header";
import Image from "next/image";
import { Pixelify_Sans, Krona_One } from "next/font/google";
import picture from "../../public/img/aboutPicture.jpg";

const pixely = Pixelify_Sans({ subsets: ["cyrillic"], weight: ["400"] });
const krona = Krona_One({ subsets: ["latin"], weight: ["400"] });

export default function Sobre() {
  return (
    <div>
      <Header />
      <div className="flex flex-row-reverse items-center px-32">
        <Image src={picture} alt="Imagem de Ricardo" className="w-80 rounded-3xl" />
        <div>
         <h1 className={`${krona.className} text-4xl py-4`}>Quem é Ricardo?</h1>
          <p className={`${pixely.className} text-2xl py-2 px-4`}>
            Atualmente sou estudante de Análise e Desenvolvimento de Sistemas,
            pela FIAP. Tenho muito interesse em tecnologia, que é minha paixão
            desde os 8 anos de idade.
          </p>
          <p className={`${pixely.className} text-2xl px-4`}>
            Hoje em dia estou gostando muito de poder desenovlver aplicações
            para Web, principalmente utilizando das ferramentas ReactJS e
            NextJS. Também para estilizar os sites utilizo Tailwind e em algumas
            aplicações utilizo Stylized Components/Modules CSS
          </p>
        </div>
      </div>
    </div>
  );
}
