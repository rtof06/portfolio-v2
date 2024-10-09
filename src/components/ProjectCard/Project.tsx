import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Krona_One } from "next/font/google";

const krona = Krona_One({ subsets: ["latin"], weight: ["400"] });

type ProjectProps = {
  firstImage: string | StaticImport;
  altFirstImage: string;
  title: string;
};

export default function Project({
  firstImage,
  altFirstImage,
  title,
}: ProjectProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className={`${krona.className} text-2xl mt-8 mb-4`}>{title}</h1>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <Image
              src={firstImage}
              alt={altFirstImage}
              className="w-1/2 rounded-md"
            />
          </div>
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
}
