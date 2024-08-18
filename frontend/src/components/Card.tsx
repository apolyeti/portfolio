import React from "react";
import {motion} from "framer-motion";

interface CardProps {
    cover: string;
    children: React.ReactNode;
}

export default function Card({ cover, children }: CardProps) {
    return (
        <div className="w-1/3 h-2/3 card flex-row flex justify-center">
            <div className="flex flex-col w-1/3 items-center justify-center text-center z-10">
                <p className="p-8">
                    {cover}
                </p>
            </div>
            <div className="flex flex-col w-2/3 justify-center text-center overflow-hidden">
                {children}
            </div>
        </div>
    );
}