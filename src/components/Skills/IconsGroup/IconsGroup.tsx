import Image from "next/image";

type IconsGroupProps = {
  src: string;
  alt: string;
};

export default function IconsGroup({ src, alt }: IconsGroupProps) {
  return <Image src={src} alt={alt} className="max-w-20 p-2" />;
}
