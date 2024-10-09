import Header from "@/components/Header/Header";
import Image from "next/image";
import GIFLupa from "../public/img/lupa.gif"
import Link from "next/link";

export default function notFound() {
  return (
    <>
      <Header title="Erro 404! Aparentemente essa página ainda não existe..."/>
      <div className="container flex flex-col items-center">
         <Image src={GIFLupa} alt="GIF de uma lupa" className="pt-6"/>
         <Link href="/" className="text-lg hover:opacity-75"><p>Volte para a página inicial aqui!</p></Link>
      </div>
    </>
  );
}
