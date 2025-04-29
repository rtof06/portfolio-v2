import Header from "@/components/Header/Header";
import Image from "next/image";
import lkdn from "@/public/img/"

export default function Curriculo() {
  return (
    <div>
      <Header title="Meu Currículo" />
      <section>
        <p className={``}>
          Aqui você pode acessar o meu currículo completo, com informações sobre
          minha formação, experiência profissional e habilidades.
        </p>
        <a
          href="../../public/docs/cvRicardoTavaresDeOliveiraFilho.pdf"
          download
        >
          Baixar Currículo
        </a>
        <p>Currículo atualizado em 2025</p>
        <div className="contatos">
          <p>Contato: ricardoofilho06@gmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/ricardotavaresfilho/"><Image src={lkdn} alt="linkedin logo"/></a></p>
          <p>GitHub: <a href="https://www.github.com/rtof06"></a></p>
          <p>Telefone: +55 (11) 97501-1013</p>
        </div>
      </section>
    </div>
  );
}
