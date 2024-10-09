import IconsGroup from "./IconsGroup/IconsGroup";
import NextLogo from "../../public/img/NextJS.svg"
import ReactLogo from "../../public/img/React.svg"
import TailwindLogo from "../../public/img/Tailwind.svg"
import TSLogo from "../../public/img/TypeScript.svg"
import JavaLogo from "../../public/img/java.svg"
import JSLogo from "../../public/img/javascript.svg"

export default function Skills() {
  const logos: { src: string; alt: string }[] = [
    {
      src: ReactLogo,
      alt: "React Logo",
    },
    {
      src: NextLogo,
      alt: "Next Logo",
    },
    {
      src: TailwindLogo,
      alt: "Tailwind Logo",
    },
    {
      src: TSLogo,
      alt: "TypeScript Logo",
    },
    {
      src: JSLogo,
      alt: "JavaScript Logo",
    },
    {
      src: JavaLogo,
      alt: "Java Logo",
    },
  ];

  return (
    <div className="flex overflow-hidden justify-center group [mask-image:_linear-gradient(to_right,transparent_0,_black_512px,_black_calc(100%-512px),transparent_100%)]">
      <ul className="flex animate-infinite-scroll group-hover:paused" aria-hidden={true}>
        {logos.map((logo) => (
          <IconsGroup src={logo.src} alt={logo.alt} key={logo.src}/>
        ))}
      </ul>
      <ul className="flex animate-infinite-scroll group-hover:paused" aria-hidden={true}>
        {logos.map((logo) => (
          <IconsGroup src={logo.src} alt={logo.alt} key={logo.src}/>
        ))}
      </ul>
      <ul className="flex animate-infinite-scroll group-hover:paused" aria-hidden={true}>
        {logos.map((logo) => (
          <IconsGroup src={logo.src} alt={logo.alt} key={logo.src}/>
        ))}
      </ul>
      <ul className="flex animate-infinite-scroll group-hover:paused" aria-hidden={true}>
        {logos.map((logo) => (
          <IconsGroup src={logo.src} alt={logo.alt} key={logo.src}/>
        ))}
      </ul>
    </div>
  );
}
