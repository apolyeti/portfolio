import React, {useState} from "react";
import {motion} from "framer-motion";

interface CardProps {
    cover: string;
    children: React.ReactNode;
}

export default function Card({ cover, children }: CardProps) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="w-1/3 h-2/3 card flex-row flex justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div 
                className="flex flex-col items-center justify-center text-center z-10"
                style={{
                    width: !isHovered ? '100%' : '33%',
                    transition: 'width 0.3s',
                }}
            >
                <p className="p-8">
                    {cover}
                </p>
            </div>
            <div 
                className="flex flex-col justify-center text-left overflow-hidden text-nowrap"
                style={{
                    width: !isHovered ? '0%' : '67%',
                    borderLeft: isHovered? '1px solid #212429' : 'none',
                    borderColor: isHovered ? '#212429' : 'transparent',
                    transition: 'width 0.3s, border-left 0.1s',

                }}
            >
                {children}
            </div>
        </div>
    );
}