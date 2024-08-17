import { useEffect } from 'react';
import TechStackIcon from './TechStackIcon';
import { RiNextjsLine, RiJavascriptLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
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













export default function Skills() {
    useEffect(() => {
        // Optionally add any additional effect or state management here if needed
    }, []);

    return (
        <div className="flex flex-col justify-center h-screen relative">
            <div className="flex flex-row h-full justify-between">
                {/* Left icons */}
                <div className="flex flex-col h-full justify-center p-4 gap-4 w-full items-center">
                    <div className="flex flex-col items-center gap-4">
                        <TechStackIcon name="JavaScript">
                            <RiJavascriptLine size={40} />
                        </TechStackIcon>
                        <TechStackIcon name="TypeScript">
                            <TbBrandTypescript size={40} />
                        </TechStackIcon>
                        <TechStackIcon name="Python">
                            <AiOutlinePython size={40} />
                        </TechStackIcon>
                        <TechStackIcon name="Golang">
                            <BiLogoGoLang size={40} />
                        </TechStackIcon>
                        <TechStackIcon name="C">
                            <PiFileCLight size={40} />
                        </TechStackIcon>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <TechStackIcon name="C++">
                            <PiFileCppLight size={40} />
                        </TechStackIcon>
                        <TechStackIcon name="C#">
                            <PiFileCSharpLight size={40} />
                        </TechStackIcon>
                        <TechStackIcon name="Java">
                            <AiOutlineJava size={40} />
                        </TechStackIcon>
                        <TechStackIcon name="Swift">
                            <DiSwift size={40} />
                        </TechStackIcon>
                        <TechStackIcon name="Rust">
                            <FaRust size={40} />
                        </TechStackIcon>
                    </div>
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
                <div className="flex flex-col h-full justify-center p-4 gap-4 items-center w-full">
                    <div className="flex flex-col items-center gap-4">
                        <TechStackIcon name="Node.js">
                            <FaNodeJs size={40} />
                        </TechStackIcon>
                        <TechStackIcon name="Next.js">
                            <RiNextjsLine size={40} />
                        </TechStackIcon>
                        <TechStackIcon name="Docker">
                            <FaDocker size={40} />
                        </TechStackIcon>
                        <TechStackIcon name="AWS">
                            <FaAws size={40} />
                        </TechStackIcon>
                        <TechStackIcon name="SQL/NoSQL">
                            <GoDatabase size={40} />
                        </TechStackIcon>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <TechStackIcon name="Git">
                            <IoGitBranchOutline size={40} />
                        </TechStackIcon>
                        <TechStackIcon name="Flask">
                            <SiFlask size={40} />
                        </TechStackIcon>
                        <TechStackIcon name="TensorFlow">
                            <SiTensorflow size={40} />
                        </TechStackIcon>
                        <TechStackIcon name="PyTorch">
                            <SiPytorch size={40} />
                        </TechStackIcon>
                        <TechStackIcon name="Hugging Face">
                            <SiHuggingface size={40} />
                        </TechStackIcon>
                    </div>
                </div>
            </div>
        </div>
    );
}
