import { useState, useEffect } from 'react';

export default function NavBar() {
    const [isVisible, setIsVisible] = useState(false); // Start with the navbar hidden
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 0 && currentScrollY > lastScrollY) {
                // User is scrolling down, show the navbar
                setIsVisible(true);
            } else if (currentScrollY <= 0) {
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
            className={`fixed top-0 left-0 w-full shadow z-50 h-20 bg-white transition-transform duration-500 ${
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
            </div>
        </div>
    );
}
