import { useState, useEffect } from 'react'




function Home() {

    const [headerLine1, setHeaderLine1] = useState('');
    const [headerLine2, setHeaderLine2] = useState('');
    const [index, setIndex] = useState(0);


    useEffect(() => {
        const wordsLine1 = ['WELCOME', 'TO'];
        const wordsLine2 = ['MY', 'PORTFOLIO'];

        if (index === 0) {
            // Start the first word with an initial delay
            const timeoutId = setTimeout(() => {
                setHeaderLine1(wordsLine1[0]);
                setIndex(1);
            }, 900);
            return () => clearTimeout(timeoutId);
        }

        if (index < wordsLine1.length) {
            const timeoutId = setTimeout(() => {
                setHeaderLine1(prev => (prev ? prev + ' ' : '') + wordsLine1[index]);
                setIndex(index + 1);
            }, 300);

            return () => clearTimeout(timeoutId);
        } else if (index < wordsLine1.length + wordsLine2.length) {
            const timeoutId = setTimeout(() => {
                const wordIndex = index - wordsLine1.length;
                setHeaderLine2(prev => (prev ? prev + ' ' : '') + wordsLine2[wordIndex]);
                setIndex(index + 1);
            }, 300);

            return () => clearTimeout(timeoutId);
        }
    }, [index]);

    return (
        <div className="flex flex-col items-center justify-center text-center h-screen">
            <div className="flex flex-col p-2">
                <h1>
                    {headerLine1}
                </h1>
                <h1>
                    {headerLine2}
                </h1>
            </div>
        </div>
    )
}

export default Home
