import { useState, useEffect } from "react";
import Sphere from "./components/Sphere";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function Home() {
  const [headerLine1, setHeaderLine1] = useState("");
  const [headerLine2, setHeaderLine2] = useState("");

  const [age, setAge] = useState(0);
  const [showPage, setShowPage] = useState(false);
  const [index, setIndex] = useState(0);

  const initialDelay = 900; // Initial delay before starting the animation
  const wordDelay = 350; // Delay between each word

  useEffect(() => {
    const birthDate = new Date("2003-12-12");
    const today = new Date();
    const ageDiff = today.getTime() - birthDate.getTime();
    const ageDate = new Date(ageDiff);
    setAge(Math.abs(ageDate.getUTCFullYear() - 1970));
  }, []);

  useEffect(() => {
    const fragment = window.location.hash;

    if (fragment) {
      setHeaderLine1("HELLO I");
      setHeaderLine2("AM ARVEEN");
      setIndex(4);
      setShowPage(true);

      // go to fragment
      const element = document.getElementById(fragment.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }

      setTimeout(() => {
        window.history.replaceState(null, "", window.location.pathname);
      }, 1000);

      return;
    }

    const wordsLine1 = ["HELLO", "I"];
    const wordsLine2 = ["AM", "ARVEEN"];

    let currentWordDelay = wordDelay;

    // Adjust the delay if we are transitioning from "I" to "AM"
    if (index === wordsLine1.length) {
      currentWordDelay = 200; // Shorter delay specifically between "I" and "AM"
    }

    if (index === 0) {
      // Start the first word with an initial delay
      const timeoutId = setTimeout(() => {
        setHeaderLine1(wordsLine1[0]);
        setIndex(1);
      }, initialDelay);
      return () => clearTimeout(timeoutId);
    }

    if (index > 0 && index < wordsLine1.length) {
      // Continue with the rest of the words in the first line
      const timeoutId = setTimeout(() => {
        setHeaderLine1((prev) => prev + " " + wordsLine1[index]);
        setIndex(index + 1);
      }, wordDelay);
      return () => clearTimeout(timeoutId);
    } else if (
      index >= wordsLine1.length &&
      index < wordsLine1.length + wordsLine2.length
    ) {
      // Start displaying words for the second line
      const timeoutId = setTimeout(() => {
        const wordIndex = index - wordsLine1.length;
        setHeaderLine2(
          (prev) => (prev ? prev + " " : "") + wordsLine2[wordIndex]
        );
        setIndex(index + 1);
      }, currentWordDelay);
      return () => clearTimeout(timeoutId);
    }

    if (index === wordsLine1.length + wordsLine2.length) {
      // Show the page after the last word has been displayed
      setShowPage(true);
    }
  }, [index]);

  const scrollDown = () => {
    const portfolio = document.getElementById("portfolio");
    if (portfolio) {
      portfolio.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-hidden">
      <NavBar /> {/* Always render the NavBar */}
      <div className="flex flex-col md:justify-between h-screen p-4" id="home">
        <div className="flex h-1/5 md:h-0"></div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between">
          <div className="flex flex-col justify-center md:items-start items-center gap-4">
            <h1
              className="text-4xl md:text-7xl"
              style={{ opacity: headerLine1 ? 1 : 0 }}>
              {headerLine1 || "WELCOME TO"}
            </h1>
            <h1
              className="text-4xl md:text-7xl"
              style={{ opacity: headerLine2 ? 1 : 0 }}>
              {headerLine2 || "MY PORTFOLIO"}
            </h1>
          </div>

          <div
            className="w-full md:w-2/5 h-5/6 md:h-full flex justify-center items-center"
            style={{ opacity: showPage ? 1 : 0 }}>
            <Sphere />
          </div>
        </div>
        <button
          style={{ opacity: showPage ? 1 : 0 }}
          disabled={!showPage}
          onClick={scrollDown}>
          <p className="text-2xl">LEARN MORE</p>
        </button>
      </div>
      {showPage && (
        <>
          <div className="flex flex-col justify-center h-screen" id="portfolio">
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex md:flex-col flex-row gap-4 py-4 md:py-0 items-center">
                <h1 className="text-5xl">ABOUT</h1>
                <h1 className="text-5xl">ME</h1>
              </div>
              <div className="flex flex-col w-full md:w-1/3 md:text-left text-center h-full gap-4 px-4">
                <p className="">
                  I'm Arveen Azhand, a {age}-year-old software engineer based in
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
                  I'm passionate about distributed systems and machine learning,
                  specializing in building scalable architectures and advanced
                  models. I'm also highly skilled in full-stack development and
                  always eager to explore new technologies.
                </p>
              </div>
              <div className="spacer"></div>
            </div>
          </div>
          <Skills />
          <Work />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  );
}

export default Home;
