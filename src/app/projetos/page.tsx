import Header from "@/components/Header/Header";
import Project from "@/components/ProjectCard/Project";
import porto1 from "../../public/img/projectsImg/portoConserta/projeto-porto-1.png";
import porto2 from "../../public/img/projectsImg/portoConserta/projeto-porto-2.png";
import porto3 from "../../public/img/projectsImg/portoConserta/projeto-porto-3.png";
import casamento1 from "../../public/img/projectsImg/casamentoLigiaMarcos/casamento-main.png";
import casamento2 from "../../public/img/projectsImg/casamentoLigiaMarcos/casamento-timeline.png";
import casamento3 from "../../public/img/projectsImg/casamentoLigiaMarcos/casamento-confirmacao.png";
import portfolio1 from "../../public/img/projectsImg/portfolio/portfolio1.png";
import portfolio2 from "../../public/img/projectsImg/portfolio/portfolio2.png";

export default function Projects() {
  return (
    <>
      <Header title="Meus Projetos" />
      <section className="projects flex justify-center gap-10 flex-wrap
       max-sm:flex-col">
      <Project
        firstImage={porto1}
        altFirstImage="Foto do menu do site do projeto Porto Conserta"
        secImage={porto2}
        altSecImage="Print da página de Login"
        thirdImage={porto3}
        altThirdImage="Print das opções de diagnóstico do carro"
        title="Projeto Porto Conserta"
        urlDemo="https://projeto-porto-conserta-v4.vercel.app/"
        urlRepo="https://github.com/rtof06/projeto-porto-conserta-v4"
      />
      <Project
        firstImage={casamento1}
        altFirstImage="Foto do menu do site do casamento"
        secImage={casamento2}
        altSecImage="Print da TimeLine de história do casal"
        thirdImage={casamento3}
        altThirdImage="Print da página de confirmação de presença"
        title="Site de casamento"
        urlDemo="https://casamento-marcos-ligia.vercel.app/"
        urlRepo="https://github.com/rtof06/casamento-marcos-ligia"
      />
      <Project
        firstImage={portfolio1}
        altFirstImage="Foto do menu do site do casamento"
        secImage={portfolio2}
        altSecImage="Print da TimeLine de história do casal"
        thirdImage={casamento3}
        altThirdImage="Print da página de confirmação de presença"
        title="Site de casamento"
        urlDemo="#"
        urlRepo="https://github.com/rtof06/portfolio-v2"
      />
      </section>
    </>
  );
}
