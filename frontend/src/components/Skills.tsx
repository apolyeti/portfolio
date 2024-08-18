import { useEffect } from 'react';
import TechStackIcon from './TechStackIcon';
import { RiNextjsLine, RiJavascriptLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { PiFileCLight, PiFileCppLight, PiFileCSharpLight } from "react-icons/pi";
import { BiLogoGoLang } from "react-icons/bi";
import { AiOutlinePython } from "react-icons/ai";
import { SiPytorch } from "react-icons/si";
import { AiOutlineJava } from "react-icons/ai";
import { DiSwift } from "react-icons/di";
import { FaRust } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiHuggingface } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { IoGitBranchOutline } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";


import useMeasure from 'react-use-measure';
import { animate, useMotionValue, motion } from 'framer-motion';













export default function Skills() {

    const leftIcons = [
        {
            name: "JavaScript",
            icon: <RiJavascriptLine size={40} />
        },
        {
            name: "TypeScript",
            icon: <TbBrandTypescript size={40} />
        },
        {
            name: "Python",
            icon: <AiOutlinePython size={40} />
        },
        {
            name: "Golang",
            icon: <BiLogoGoLang size={40} />
        },
        {
            name: "C",
            icon: <PiFileCLight size={40} />
        },
        {
            name: "C++",
            icon: <PiFileCppLight size={40} />
        },
        {
            name: "C#",
            icon: <PiFileCSharpLight size={40} />
        },
        {
            name: "Java",
            icon: <AiOutlineJava size={40} />
        },
        {
            name: "Swift",
            icon: <DiSwift size={40} />
        },
        {
            name: "Rust",
            icon: <FaRust size={40} />
        }
    ]

    const rightIcons = [
        {
            name: "Node.js",
            icon: <FaNodeJs size={40} />
        },
        {
            name: "Next.js",
            icon: <RiNextjsLine size={40} />
        },
        {
            name: "Docker",
            icon: <FaDocker size={40} />
        },
        {
            name: "AWS",
            icon: <FaAws size={40} />
        },
        {
            name: "SQL/NoSQL",
            icon: <GoDatabase size={40} />
        },
        {
            name: "Git",
            icon: <IoGitBranchOutline size={40} />
        },
        {
            name: "Flask",
            icon: <SiFlask size={40} />
        },
        {
            name: "TensorFlow",
            icon: <SiTensorflow size={40} />
        },
        {
            name: "PyTorch",
            icon: <SiPytorch size={40} />
        },
        {
            name: "Hugging Face",
            icon: <SiHuggingface size={40} />
        }
    ]

    const [leftRef, { height: leftHeight }] = useMeasure();
    const [rightRef, { height: rightHeight }] = useMeasure();

    const leftY = useMotionValue(0);
    const rightY = useMotionValue(0);

    useEffect(() => {
        if (leftHeight > 0) {
            const finalPosition = -leftHeight - 135;
            const controls = animate(leftY, [0, finalPosition], {
                ease: 'linear',
                duration: 25,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0
            });

            return controls.stop;
        }
    }, [leftHeight, leftY]);

    useEffect(() => {
        if (rightHeight > 0) {
            const finalPosition = rightHeight + 135;
            const controls = animate(rightY, [0, finalPosition], {
                ease: 'linear',
                duration: 25,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0
            });

            return controls.stop;
        }
    }, [rightHeight, rightY]);



    return (
        <div className="flex flex-col justify-center h-screen relative">
            <div className="cover top h-1/4 absolute top-0 left-0 right-0 z-10">
            </div>
            <div className="cover bottom h-1/4 absolute bottom-0 left-0 right-0 z-10">
            </div>
            <div className="flex flex-row h-full justify-between">
                {/* Left icons */}
                <div className="flex flex-col h-full p-4 gap-4 w-full items-center overflow-hidden">
                    <motion.div 
                        className="flex flex-col items-center gap-4 h-full" 
                        ref={leftRef}
                        style={{ y: leftY }}
                    >
                        {[...leftIcons, ...leftIcons].map((icon, index) => (
                            <TechStackIcon key={index} name={icon.name}>
                                {icon.icon}
                            </TechStackIcon>
                        ))}
                    </motion.div>
                </div>

                {/* Center SVG with horizontal dashed circle */}
                <div className="flex flex-col h-full justify-center text-center gap-4">
                    <h1 className="text-5xl">
                        MY
                    </h1>
                    <h1 className="text-5xl">
                        SKILLS
                    </h1>
                </div>

                {/* Right icons */}
                <div className="flex flex-col h-full p-4 gap-4 w-full items-center overflow-hidden">
                    <motion.div 
                        className="flex flex-col items-center gap-4 h-full justify-center move-up"
                        ref={rightRef}
                        style={{ y: rightY }}
                    >
                        {[...rightIcons, ...rightIcons, ...rightIcons].map((icon, index) => (
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
