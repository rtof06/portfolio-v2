import Header from "@/components/Header/Header";
import Image from "next/image";
import man from "../../public/img/manutancao.gif";
import { Pixelify_Sans } from "next/font/google";
import print from "../../public/img/printCurriculo.jpg";

const pixelfy = Pixelify_Sans({ subsets: ["cyrillic"], weight: ["400"] });

export default function Curriculo() {
  return (
    <div>
      <Header title="Meu Currículo" />
      <section className="flex justify-center flex-col items-center">
        <Image src={man} alt="GIF de manutencao" className="w-1/6"/>
        <p className={`${pixelfy.className} text-2xl mx-44`}>
          Esta página está em manutenção... Porém, por enquanto aqui você pode acessar o meu currículo completo, com informações sobre
          minha formação, experiência profissional e habilidades.
        </p>
        {/* <p className={``}>
          Aqui você pode acessar o meu currículo completo, com informações sobre
          minha formação, experiência profissional e habilidades.
        </p> */}
        <a
          href="../../public/docs/cvRicardoTavaresDeOliveiraFilho.pdf"
          download="cvRicardoTavaresDeOliveiraFilho.pdf"
          className="flex justify-center items-center mt-5"
        >
          <Image src={print} alt="print do curriculo" className="w-1/2"/>
        </a>
        <p>Currículo atualizado em 2025</p>
        {/* <div className="contatos">
          <p>Contato: <a href="mailto:ricardoofilho06@gmail.com" target="_blank" rel="noopener noreferrer" >email</a></p>
          <p>LinkedIn: [Seu LinkedIn]</p>
          <p>GitHub: [Seu GitHub]</p>
          <p>Telefone: +55 (11) 97501-1013</p>
        </div> */}
      </section>
    </div>
  );
}
