import { CiMail } from "react-icons/ci";
import {
  PiLinkedinLogoLight,
  PiGithubLogoLight,
  PiGraduationCapLight,
} from "react-icons/pi";

export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="flex flex-col md:flex-row items-center justify-center h-screen gap-8">
        <div className="flex flex-col w-full md:w-1/3 text-center">
          <h1 className="text-4xl">CONTACT</h1>
          <div className="flex flex-col p-2">
            <h2>I'm always open to new opportunities.</h2>
            <h2>I'm available on multiple platforms,</h2>
            <h2>so please do not hesitate to reach</h2>
            <h2>out to me on any of them.</h2>
          </div>
        </div>
        <div className="flex flex-col w-full items-center md:items-start md:w-1/4 gap-8">
          <div className="flex flex-row gap-2">
            <CiMail size={25} />
            <a
              href="mailto:azhandarveen@gmail.com"
              className="underline italic">
              azhandarveen@gmail.com
            </a>
          </div>
          <div className="flex flex-row gap-2">
            <PiGraduationCapLight size={25} />
            <a href="mailto:aazhand@ucsc.edu" className="underline italic">
              aazhand@ucsc.edu
            </a>
          </div>
          <div className="flex flex-row gap-2">
            <PiLinkedinLogoLight size={25} />
            <a
              href="https://www.linkedin.com/in/arveenazhand/"
              target="_blank"
              className="underline italic">
              LinkedIn
            </a>
          </div>
          <div className="flex flex-row gap-2">
            <PiGithubLogoLight size={25} />
            <a
              href="https://github.com/apolyeti"
              target="_blank"
              className="underline italic">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
