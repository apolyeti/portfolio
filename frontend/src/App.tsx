import { useState, useEffect } from 'react';
import Sphere from './components/Sphere';


function Home() {
    const [headerLine1, setHeaderLine1] = useState('');
    const [headerLine2, setHeaderLine2] = useState('');
    const [showPage, setShowPage] = useState(false);
    const [index, setIndex] = useState(0);

    const initialDelay = 900; // Initial delay before starting the animation
    const wordDelay = 300;    // Delay between each word

    useEffect(() => {
        const wordsLine1 = ['WELCOME', 'TO'];
        const wordsLine2 = ['MY', 'WEBSITE'];
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
            }, wordDelay);
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
        <div className="flex flex-col justify-between h-screen p-4">
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
            <div className="flex flex-col justify-center h-screen" id="portfolio">
                <h1 className="text-4xl">This is the home page</h1>
            </div>
        )}
        </>
    );
}

export default Home;
