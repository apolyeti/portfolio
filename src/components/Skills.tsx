import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { RiJavascriptLine, RiNextjsLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { AiOutlineJava, AiOutlinePython } from "react-icons/ai";
import { BiLogoGoLang } from "react-icons/bi";
import {
  PiFileCLight,
  PiFileCppLight,
  PiFileCSharpLight,
} from "react-icons/pi";
import { DiSwift } from "react-icons/di";
import { FaAws, FaDocker, FaNodeJs, FaRust } from "react-icons/fa6";
import { GoDatabase } from "react-icons/go";
import { IoGitBranchOutline } from "react-icons/io5";
import {
  SiFlask,
  SiHuggingface,
  SiPytorch,
  SiTensorflow,
} from "react-icons/si";

export default function Skills() {
  const animation = { duration: 10000, easing: (t: unknown) => t };

  const sliderOptionsLeft = {
    loop: true,
    spacing: 0,
    vertical: true,
    slides: {
      perView: 8,
      spacing: 25,
    },
    drag: false,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    created(s: any) {
      s.moveToIdx(3, true, animation);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updated(s: any) {
      s.moveToIdx(s.track.details.abs + 3, true, animation);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    animationEnded(s: any) {
      s.moveToIdx(s.track.details.abs + 3, true, animation);
    },
  };

  const sliderOptionsRight = {
    loop: true,
    spacing: 0,
    vertical: true,
    slides: {
      perView: 8,
      spacing: 25,
    },
    drag: false,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    created(s: any) {
      s.moveToIdx(-3, true, animation);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updated(s: any) {
      s.moveToIdx(s.track.details.abs - 3, true, animation);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    animationEnded(s: any) {
      s.moveToIdx(s.track.details.abs - 3, true, animation);
    },
  };

  const [sliderRefLeft] = useKeenSlider(sliderOptionsLeft);
  const [sliderRefRight] = useKeenSlider(sliderOptionsRight);

  const leftSkills = [
    {
      name: "JavaScript",
      icon: <RiJavascriptLine size={40} className="mx-auto" />,
    },
    {
      name: "TypeScript",
      icon: <TbBrandTypescript size={40} className="mx-auto" />,
    },
    {
      name: "Python",
      icon: <AiOutlinePython size={40} className="mx-auto" />,
    },
    {
      name: "Golang",
      icon: <BiLogoGoLang size={40} className="mx-auto" />,
    },
    {
      name: "C",
      icon: <PiFileCLight size={40} className="mx-auto" />,
    },
    {
      name: "C++",
      icon: <PiFileCppLight size={40} className="mx-auto" />,
    },
    {
      name: "Java",
      icon: <AiOutlineJava size={40} className="mx-auto" />,
    },
    {
      name: "Swift",
      icon: <DiSwift size={60} className="mx-auto" />,
    },
    {
      name: "Rust",
      icon: <FaRust size={40} className="mx-auto" />,
    },
  ];

  const rightIcons = [
    {
      name: "Node.js",
      icon: <FaNodeJs size={40} className="mx-auto" />,
    },
    {
      name: "Next.js",
      icon: <RiNextjsLine size={40} className="mx-auto" />,
    },
    {
      name: "Docker",
      icon: <FaDocker size={40} className="mx-auto" />,
    },
    {
      name: "AWS",
      icon: <FaAws size={40} className="mx-auto" />,
    },
    {
      name: "SQL/NoSQL",
      icon: <GoDatabase size={40} className="mx-auto" />,
    },
    {
      name: "Git",
      icon: <IoGitBranchOutline size={40} className="mx-auto" />,
    },
    {
      name: "Flask",
      icon: <SiFlask size={40} className="mx-auto" />,
    },
    {
      name: "TensorFlow",
      icon: <SiTensorflow size={40} className="mx-auto" />,
    },
    {
      name: "PyTorch",
      icon: <SiPytorch size={60} className="mx-auto" />,
    },
  ];

  return (
    <div className="flex flex-col justify-center md:h-screen relative w-full items-center h-0 md:opacity-100 opacity-0">
      <div className="cover top h-[20vh] absolute top-0 left-0 right-0 z-10"></div>
      <div className="cover bottom h-[20vh] absolute bottom-0 left-0 right-0 z-10"></div>
      <div className="flex flex-row h-full justify-center w-3/4">
        {/* Left icons */}
        <div className="flex items-center h-screen w-full justify-center overflow-hidden">
          <div
            ref={sliderRefLeft}
            className="flex flex-col justify-center items-center">
            {leftSkills.map((skill) => (
              <div
                key={skill.name}
                className="keen-slider__slide flex flex-col justify-center items-center">
                {skill.icon}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full h-full justify-center text-center font-bold gap-4">
          <h1 className="text-5xl">MY</h1>
          <h1 className="text-5xl">SKILLS</h1>
        </div>

        {/* Right icons */}
        <div className="flex items-center h-screen w-full justify-center overflow-hidden">
          <div
            ref={sliderRefRight}
            className="flex flex-col justify-center items-center">
            {rightIcons.map((skill) => (
              <div
                key={skill.name}
                className="keen-slider__slide flex flex-col justify-center items-center text-center">
                {skill.icon}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
