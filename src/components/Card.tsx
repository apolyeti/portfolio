import React, { useState } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export default function Card({ children }: CardProps) {

    const [isHovered, setIsHovered] = useState(false);

    const childrenArray = React.Children.toArray(children).filter(
        (child): child is React.ReactElement => React.isValidElement(child)
    );

    const cardCover = childrenArray.find(
        (child) => child.type === Card.Cover
    );
    const cardDesc = childrenArray.find(
        (child) => child.type === Card.Desc
    );



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
                {cardCover && cardCover.props.children}
            </div>
            <div 
                className="flex flex-col justify-center text-left overflow-hidden text-nowrap"
                style={{
                    width: !isHovered ? '0%' : '67%',
                    borderLeft: isHovered? '1px solid #212429' : 'none',
                    borderColor: isHovered ? '#212429' : 'transparent',
                    transition: 'width 0.3s',

                }}
            >
                {cardDesc && cardDesc.props.children}
            </div>
        </div>
    );
}

Card.Cover = function Cover({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}

Card.Desc = function Desc({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}