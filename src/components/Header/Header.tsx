import { Krona_One } from "next/font/google";
import folderIcon from "../../public/img/folder.png";
import houseIcon from "../../public/img/home-page-white-icon.png";
import paperIcon from "../../public/img/paper.png";
import Link from "next/link";
import { Pixelify_Sans } from "next/font/google";
import Item from "./Item/Item";
const krona = Krona_One({ subsets: ["latin"], weight: ["400"] });
const pixely = Pixelify_Sans({ subsets: ["cyrillic"], weight: ["400"] });

type HeaderProps = {
  title?: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <header className="header text-center">
      <nav className="navbar flex justify-center">
        <ul>
          <li>
            <Link href="/">
              <Item
                icon={houseIcon}
                alt="Ícone de casa"
                description="Página Inicial"
                titleHover="Ir para a página inicial"
              />
            </Link>
          </li>
          <li>
            <Link href="/projetos">
              <Item
                icon={folderIcon}
                alt="Ícone de pasta"
                description="Conheça meus projetos!"
                titleHover="Ir para página de projetos"
              />
            </Link>
          </li>
          <li>
            <Link href="/curriculum">
              <Item
                icon={paperIcon}
                alt="Ícone de papel"
                description="Meu currículo"
                titleHover="Ir para página do currículo"
              />
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className={`${krona.className} text-4xl max-w-full break-words`}>
        {title}
      </h1>
    </header>
  );
}
