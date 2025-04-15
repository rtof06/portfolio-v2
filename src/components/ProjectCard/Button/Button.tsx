import Image from "next/image";
import { Pixelify_Sans } from "next/font/google";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const pixelfy = Pixelify_Sans({ subsets: ["cyrillic"], weight: ["400"] });

type ButtonProps = {
   url: string
   image: string | StaticImport
   alt: string
   text: string
}

export default function Button({url, image, alt, text}: ButtonProps) {
  return (
    <a
      href={url}
      className="project-btn flex flex-col items-center my-5 p-3 w-48 rounded-xl transition-all bg-sec-color hover:opacity-90 hover:bg-hover-color"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src={image} alt={alt} />
      <p className={`${pixelfy.className}`}>{text}</p>
    </a>
  );
}
