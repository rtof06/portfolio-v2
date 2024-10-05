import { Pixelify_Sans } from "next/font/google";

const pixely = Pixelify_Sans({subsets: ["cyrillic"], weight:["400"]})

export default function Footer() {
  return (
    <footer>
      <p className={`${pixely.className} p-10`}>Portfólio v.2 - Desenvolvido por Ricardo Tavares</p>
    </footer>
  )
}
