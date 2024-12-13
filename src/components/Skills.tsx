import { useEffect, useState } from "react";
import TechStackIcon from "./TechStackIcon";
import { RiNextjsLine, RiJavascriptLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import {
  PiFileCLight,
  PiFileCppLight,
  PiFileCSharpLight,
} from "react-icons/pi";
import { BiLogoGoLang } from "react-icons/bi";
import { AiOutlinePython } from "react-icons/ai";
import { SiPytorch } from "react-icons/si";
import { AiOutlineJava, AiOutlineKubernetes } from "react-icons/ai";
import { DiSwift, DiPostgresql } from "react-icons/di";
import { FaRust } from "react-icons/fa";
import { SiFlask, SiNginxproxymanager } from "react-icons/si";
import { SiHuggingface } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";

import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";

export default function Skills() {
  const [gapSize, setGapSize] = useState(4); // Default gap size

  const calculateGapSize = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // adjust gap size based on screen size
    if (screenWidth < 640) {
      setGapSize(2);
    } else if (screenWidth < 768) {
      setGapSize(2.5);
    } else if (screenWidth < 1024) {
      setGapSize(3);
    } else if (screenWidth < 1280) {
      setGapSize(3.5);
    } else if (screenWidth < 1536) {
      setGapSize(4);
    } else {
      setGapSize(4.5);
    }

    // adjust gap size based on screen height
    if (screenHeight < 640) {
      setGapSize(2);
    } else if (screenHeight < 768) {
      setGapSize(2.5);
    } else if (screenHeight < 1024) {
      setGapSize(3);
    } else if (screenHeight < 1280) {
      setGapSize(3.5);
    } else if (screenHeight < 1536) {
      setGapSize(4);
    } else {
      setGapSize(4.5);
    }
  };

  useEffect(() => {
    calculateGapSize(); // Calculate gap size on initial render
    window.addEventListener("resize", calculateGapSize); // Recalculate gap size on window resize

    return () => {
      window.removeEventListener("resize", calculateGapSize); // Clean up event listener
    };
  }, []);

  const leftIcons = [
    {
      name: "JavaScript",
      icon: <RiJavascriptLine size={40} />,
    },
    {
      name: "TypeScript",
      icon: <TbBrandTypescript size={40} />,
    },
    {
      name: "Python",
      icon: <AiOutlinePython size={40} />,
    },
    {
      name: "Golang",
      icon: <BiLogoGoLang size={40} />,
    },
    {
      name: "C",
      icon: <PiFileCLight size={40} />,
    },
    {
      name: "C++",
      icon: <PiFileCppLight size={40} />,
    },
    {
      name: "C#",
      icon: <PiFileCSharpLight size={40} />,
    },
    {
      name: "Java",
      icon: <AiOutlineJava size={40} />,
    },
    {
      name: "Swift",
      icon: <DiSwift size={40} />,
    },
    {
      name: "Rust",
      icon: <FaRust size={40} />,
    },
  ];

  const rightIcons = [
    {
      name: "Node.js",
      icon: <FaNodeJs size={40} />,
    },
    {
      name: "Next.js",
      icon: <RiNextjsLine size={40} />,
    },
    {
      name: "Docker",
      icon: <FaDocker size={40} />,
    },
    {
      name: "Kubernetes",
      icon: <AiOutlineKubernetes size={40} />,
    },
    {
      name: "AWS",
      icon: <FaAws size={40} />,
    },
    {
      name: "SQL/NoSQL",
      icon: <GoDatabase size={40} />,
    },
    {
      name: "NGINX",
      icon: <SiNginxproxymanager size={40} />,
    },
    {
      name: "PyTorch",
      icon: <SiPytorch size={40} />,
    },
    {
      name: "Hugging Face",
      icon: <SiHuggingface size={40} />,
    },
    {
      name: "PostgreSQL",
      icon: <DiPostgresql size={40} />,
    },
  ];

  const [leftRef, { height: leftHeight }] = useMeasure();
  const [rightRef, { height: rightHeight }] = useMeasure();

  const leftY = useMotionValue(0);
  const rightY = useMotionValue(0);

  useEffect(() => {
    const startAnimation = () => {
      if (leftHeight > 0) {
        const viewportHeight = window.innerHeight;
        const finalPosition = -leftHeight - viewportHeight / 1.95; // Adjust this to control how far it scrolls
        const controls = animate(leftY, [0, finalPosition], {
          ease: "linear",
          duration: 60,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0,
        });

        return controls.stop;
      }
    };
    startAnimation();
    window.addEventListener("resize", startAnimation); // Restart animation on resize

    return () => {
      window.removeEventListener("resize", startAnimation); // Clean up event listener
    };
  }, [leftHeight, leftY]);

  useEffect(() => {
    if (rightHeight > 0) {
      const viewportHeight = window.innerHeight;
      const finalPosition = rightHeight + viewportHeight / 1.95; // Adjust this to control how far it scrolls
      const controls = animate(rightY, [0, finalPosition], {
        ease: "linear",
        duration: 60,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });

      return controls.stop;
    }
  }, [rightHeight, rightY]);

  return (
    <div className="flex flex-col justify-center h-screen relative">
      <div className="cover top h-[20vh] absolute top-0 left-0 right-0 z-10"></div>
      <div className="cover bottom h-[20vh] absolute bottom-0 left-0 right-0 z-10"></div>
      <div className="flex flex-row h-full justify-between">
        {/* Left icons */}
        <div className="flex flex-col h-full p-4 w-full items-center overflow-hidden">
          <motion.div
            className="flex flex-col items-center gap-4 h-full"
            ref={leftRef}
            style={{ y: leftY, gap: `${gapSize}rem` }}>
            {[
              ...leftIcons,
              ...leftIcons,
              ...leftIcons,
              ...leftIcons,
              ...leftIcons,
              ...leftIcons,
            ].map((icon, index) => (
              <TechStackIcon key={index} name={icon.name}>
                {icon.icon}
              </TechStackIcon>
            ))}
          </motion.div>
        </div>

        <div
          className="flex flex-col h-full justify-center text-center gap-4"
          style={{ gap: `${gapSize}rem` }}>
          <h1 className="md:text-5xl text-3xl">MY</h1>
          <h1 className="md:text-5xl text-3xl"> SKILLS</h1>
        </div>

        {/* Right icons */}
        <div className="flex flex-col h-full p-4 gap-4 w-full items-center overflow-hidden">
          <motion.div
            className="flex flex-col items-center gap-4 h-full justify-center move-up"
            ref={rightRef}
            style={{ y: rightY, gap: `${gapSize}rem` }}>
            {[
              ...rightIcons,
              ...rightIcons,
              ...rightIcons,
              ...rightIcons,
              ...rightIcons,
              ...rightIcons,
            ].map((icon, index) => (
              <TechStackIcon key={index} name={icon.name}>
                {icon.icon}
              </TechStackIcon>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
