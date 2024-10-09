import Header from "@/components/Header/Header";
import Project from "@/components/ProjectCard/Project";
import porto1 from "../../public/img/projectsImg/portoConserta/projeto-porto-menu.png"

export default function Projects() {
  return (
    <>
      <Header title="Meus Projetos"/>
      <Project firstImage={porto1} altFirstImage="Foto do menu do site do projeto Porto Conserta" title="Projeto Porto Conserta"/>
    </>
  );
}
