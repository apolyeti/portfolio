import { useState, useEffect } from 'react';
import Sphere from './components/Sphere';
import NavBar from './components/NavBar';

function Home() {
    const [headerLine1, setHeaderLine1] = useState('');
    const [headerLine2, setHeaderLine2] = useState('');
    const [age, setAge] = useState(0);
    const [showPage, setShowPage] = useState(false);
    const [index, setIndex] = useState(0);

    const initialDelay = 900; // Initial delay before starting the animation
    const wordDelay = 350;    // Delay between each word

    useEffect(() => {
        const birthDate = new Date('2003-12-12');
        const today = new Date();
        const ageDiff = today.getTime() - birthDate.getTime();
        const ageDate = new Date(ageDiff);
        setAge(Math.abs(ageDate.getUTCFullYear() - 1970));
    }, []);

    useEffect(() => {
        const wordsLine1 = ['HELLO,', 'I'];
        const wordsLine2 = ['AM', 'ARVEEN'];

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
                setHeaderLine1(prev => prev + ' ' + wordsLine1[index]);
                setIndex(index + 1);
            }, wordDelay);
            return () => clearTimeout(timeoutId);
        } else if (index >= wordsLine1.length && index < wordsLine1.length + wordsLine2.length) {
            // Start displaying words for the second line
            const timeoutId = setTimeout(() => {
                const wordIndex = index - wordsLine1.length;
                setHeaderLine2(prev => (prev ? prev + ' ' : '') + wordsLine2[wordIndex]);
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
        const portfolio = document.getElementById('portfolio');
        if (portfolio) {
            portfolio.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
            <NavBar /> {/* Always render the NavBar */}
            <div className="flex flex-col justify-between h-screen p-4" id="home">
                <div className="flex" id="spacer"></div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col justify-center gap-4 h-full">
                        <h1 className="text-7xl text-left" style={{ opacity: headerLine1 ? 1 : 0 }}>
                            {headerLine1 || 'WELCOME TO'}
                        </h1>
                        <h1 className="text-7xl text-left" style={{ opacity: headerLine2 ? 1 : 0 }}>
                            {headerLine2 || 'MY WEBSITE'}
                        </h1>
                    </div>
                    <div 
                        className="flex flex-row justify-evenly w-2/5 h-full items-center border-black border-2"
                        style={{ opacity: showPage ? 1 : 0 }}
                    >
                        <Sphere />
                    </div>
                </div>
                <button style={{opacity: showPage ? 1 : 0}} disabled={!showPage} onClick={scrollDown}>
                    <p className="text-2xl">
                        LEARN MORE
                    </p>
                </button>
            </div>
            {showPage && (
                <>
                    <div className="flex flex-col justify-center h-screen" id="portfolio">
                        <div className="flex flex-row items-center justify-center">
                            <div className="flex flex-col w-1/4 justify-evenly text-center h-full gap-2">
                                <div>
                                    <h1 className="text-5xl py-7">
                                        ABOUT
                                    </h1>
                                    <h1 className="text-5xl">
                                        ME
                                    </h1>
                                </div>
                            </div>
                            <div className="flex flex-col w-2/5 text-left h-full gap-4">
                                <p className="">
                                    I'm Arveen Azhand, a {age}-year-old software developer based in Seattle, WA.
                                </p>
                                <p>
                                    I'm currently attending the University of California, Santa Cruz, pursuing a Bachelor of Science in Computer Science.
                                </p>
                                <p className="">
                                    Through my journey in the world of software development, I've had many different interests and passions, giving me a wide range of skills and experiences.
                                </p>
                            </div>
                            <div className="spacer"></div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center h-screen">
                        <div className="flex flex-row items-center justify-center">
                            <div id="work" className="flex flex-col w-1/4 justify-evenly text-center h-full gap-2">
                                <div>
                                    <h1 className="text-5xl py-7">
                                        MY
                                    </h1>
                                    <h1 className="text-5xl">
                                        WORK
                                    </h1>
                                </div>
                                <div className="flex flex-row justify-evenly items-center">
                                    <a href="https://www.linkedin.com/in/arveenazhand/">
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Home;
