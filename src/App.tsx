import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Sphere from "./components/Sphere";
import Clock from "./components/Clock";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function Home() {
  const line1Words = ["A", "SOFTWARE", "ENGINEER"];
  const line2Words = ["BASED", "IN", "SEATTLE"];
  const line3Words = ["MY", "NAME", "IS"];
  const line4Words = ["ARVEEN", "AZHAND"];
  const allWords = [...line1Words, ...line2Words, ...line3Words, ...line4Words];

  const [revealedCount, setRevealedCount] = useState(0);
  const [showPage, setShowPage] = useState(false);
  const [age, setAge] = useState(0);
  useEffect(() => {
    const birthDate = new Date("2003-12-12");
    const today = new Date();
    const ageDiff = today.getTime() - birthDate.getTime();
    const ageDate = new Date(ageDiff);
    setAge(Math.abs(ageDate.getUTCFullYear() - 1970));
  }, []);

  const initialDelay = 800;
  const wordDelay = 150;

  useEffect(() => {
    if (revealedCount >= allWords.length) {
      const timeout = setTimeout(() => {
        setShowPage(true);
      }, 150);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        setRevealedCount((prev) => prev + 1);
      },
      revealedCount === 0 ? initialDelay : wordDelay
    );

    return () => clearTimeout(timeout);
  }, [revealedCount, allWords.length]);

  const renderLine = (words: string[], offset: number) => (
    <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-center">
      {words.map((word, i) => {
        const globalIndex = offset + i;
        const isVisible = globalIndex < revealedCount;
        return (
          <span
            key={globalIndex}
            className={`inline-block mr-3 `}
            style={{
              opacity: isVisible ? 1 : 0,
              visibility: isVisible ? "visible" : "hidden",
            }}>
            {word}
          </span>
        );
      })}
    </h1>
  );

  const scrollDown = () => {
    const portfolio = document.getElementById("portfolio");
    if (portfolio) {
      portfolio.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-hidden" id="home">
      <NavBar />
      <div className="flex flex-col items-center min-h-screen">
        <div className="text-center mt-20">
          {renderLine(line1Words, 0)}
          {renderLine(line2Words, line1Words.length)}
          {renderLine(line3Words, line1Words.length + line2Words.length)}
          {renderLine(
            line4Words,
            line1Words.length + line2Words.length + line3Words.length
          )}
        </div>
        {showPage && (
          <div>
            <div className="flex flex-col md:flex-row justify-evenly items-center w-full">
              <div>
                <Sphere />
              </div>
              <div>
                <Clock />
              </div>
            </div>
          </div>
        )}
        {showPage && (
          <button
            style={{ opacity: showPage ? 1 : 0 }}
            disabled={!showPage}
            onClick={scrollDown}>
            <p className="text-xl mt-2">LEARN MORE</p>
          </button>
        )}
        {showPage && (
          <>
            <div
              className="flex flex-col justify-center h-screen"
              id="portfolio">
              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="flex md:flex-col flex-row gap-4 py-4 md:py-0 items-center font-bold">
                  <h1 className="text-5xl">ABOUT</h1>
                  <h1 className="text-5xl">ME</h1>
                </div>
                <div className="flex flex-col w-full md:w-1/3 md:text-left text-center h-full gap-4 px-4">
                  <p className="">
                    Hi! I'm Arveen, a {age}-year-old software engineer living in
                    Seattle, WA.
                  </p>
                  <p>
                    I'm currently attending the University of California, Santa
                    Cruz, pursuing a Bachelor of Science degree in Computer
                    Science.
                  </p>
                  <p className="">
                    Throughout my journey in the world of software development,
                    I've had many different interests and passions, giving me a
                    wide range of skills and experiences.
                  </p>
                  <p>
                    I'm passionate about distributed systems and machine
                    learning, specializing in building scalable architectures
                    and advanced models. I'm also highly skilled in full-stack
                    development and always eager to explore new technologies.
                  </p>
                </div>
                <div className="spacer"></div>
              </div>
            </div>
            <Work />
            {/* <Skills /> */}
            <Projects />
            <Contact />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
