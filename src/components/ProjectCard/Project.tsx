"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import logoGitHub from "@/public/img/githubIcon.png"
import demoIcon from "@/public/img/presentationLogo.png"
import Image from "next/image";
import {Krona_One } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "./Button/Button";

const krona = Krona_One({ subsets: ["latin"], weight: ["400"] });

type ProjectProps = {
  firstImage: string | StaticImport;
  altFirstImage: string;
  secImage: string | StaticImport;
  altSecImage: string;
  thirdImage: string | StaticImport;
  altThirdImage: string;
  title: string;
  urlRepo: string;
  urlDemo: string;
};

export default function Project({
  firstImage,
  altFirstImage,
  secImage,
  altSecImage,
  thirdImage,
  altThirdImage,
  title,
  urlRepo,
  urlDemo,
}: ProjectProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className={`${krona.className} text-2xl mt-8 mb-4`}>{title}</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        className="max-w-lg border-hover-color border-5 rounded-xl"
      >
        <SwiperSlide>
          <Image
            src={firstImage}
            alt={altFirstImage}
            width={500}
            height={300}
            className="w-full rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={secImage}
            alt={altSecImage}
            width={500}
            height={300}
            className="w-full rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={thirdImage}
            alt={altThirdImage}
            width={500}
            height={300}
            className="w-full rounded-md"
          />
        </SwiperSlide>
      </Swiper>
      <div className="flex items-center gap-3">
        <Button image={logoGitHub} alt="logo do github" url={urlRepo} text="Link do repositório"/>
        <Button image={demoIcon} alt="logo de apresentação" url={urlDemo} text="Link da Demo"/>
      </div>
    </div>
  );
}
