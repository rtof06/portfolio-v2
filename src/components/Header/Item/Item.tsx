import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Pixelify_Sans } from "next/font/google";
import Image from "next/image";

type ItemProps = {
  icon: string | StaticImport;
  alt: string;
  titleHover?: string;
  description: string;
};

const pixely = Pixelify_Sans({ subsets: ["cyrillic"], weight: ["400"] });

export default function Item({icon, alt, titleHover, description}:ItemProps) {
  return (
    <figure className="flex flex-col items-center p-2 my-4 rounded-xl transition-all hover:opacity-90 hover:bg-hover-color">
      <Image src={icon} alt={alt} title={titleHover} className="w-12" />
      <figcaption className={`${pixely.className}`}>{description}</figcaption>
    </figure>
  );
}
