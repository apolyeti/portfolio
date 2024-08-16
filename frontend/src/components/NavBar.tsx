import { useState, useEffect } from 'react';

export default function NavBar() {
    const [isVisible, setIsVisible] = useState(false); // Start with the navbar hidden
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const threshHold = 600;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > threshHold && currentScrollY > lastScrollY) {
                // User is scrolling down, show the navbar
                setIsVisible(true);
            } else if (currentScrollY <= threshHold) {
                // User is at the top, hide the navbar
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const handleScrollToSection = (d: string) => {
        const destination = document.getElementById(d);
        if (destination) {
            destination.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 h-20 transition-transform duration-500 ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="flex flex-row items-center justify-between h-full p-2">
                <img
                    src="/logotransparent.svg"
                    alt="Logo"
                    className="logo h-full"
                    onClick={() => handleScrollToSection('home')}
                />
                <div className="flex flex-row gap-4 px-4">
                    <button onClick={() => handleScrollToSection('home')}>HOME</button>
                    <button onClick={() => handleScrollToSection('portfolio')}>ABOUT ME</button>
                    <button onClick={() => handleScrollToSection('skills')}>WORK</button>
                    <button onClick={() => handleScrollToSection('contact')}>CONTACT</button>
                </div>
            </div>
        </div>
    );
}
