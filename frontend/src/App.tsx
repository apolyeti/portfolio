import { useState, useEffect } from 'react';

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
            
            const timeoutId = setTimeout(() => {
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }, 300);

            return () => clearTimeout(timeoutId);
        }
    }, [index]);

    return (
        <>
        <div className="flex flex-col justify-center h-screen">
            <div className="flex flex-col p-4 gap-4">
                <h1 className="text-7xl" style={{ opacity: headerLine1 ? 1 : 0 }}>
                    {headerLine1 || 'WELCOME TO'}
                </h1>
                <h1 className="text-7xl" style={{ opacity: headerLine2 ? 1 : 0 }}>
                    {headerLine2 || 'MY WEBSITE'}
                </h1>
            </div>
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
