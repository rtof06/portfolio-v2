import Header from "@/components/Header/Header";

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
          <p>Contato: [Seu E-mail]</p>
          <p>LinkedIn: [Seu LinkedIn]</p>
          <p>GitHub: [Seu GitHub]</p>
          <p>Telefone: +55 (11) 97501-1013</p>
        </div>
      </section>
    </div>
  );
}
