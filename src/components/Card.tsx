import React, { useState } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  reverse?: boolean;
}

export default function Card({ children, reverse }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const childrenArray = React.Children.toArray(children).filter(
    (child): child is React.ReactElement => React.isValidElement(child)
  );

  const cardCover = childrenArray.find((child) => child.type === Card.Cover);
  const cardDesc = childrenArray.find((child) => child.type === Card.Desc);

  return (
    <div
      className={`w-full h-2/3 card flex ${
        reverse ? "flex-row md:flex-row-reverse" : "flex-row"
      } justify-center overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {/* Cover Section */}
      <div
        className="flex flex-col items-center justify-center text-center z-10 overflow-hidden"
        style={{
          width: !isHovered ? "100%" : "33%",
          transition: "width 0.3s",
        }}>
        {cardCover && cardCover.props.children}
      </div>

      {/* Description Section */}
      <div
        className="flex flex-col justify-center text-left overflow-hidden text-nowrap"
        style={{
          width: !isHovered ? "0%" : "67%",
          transition: "width 0.3s",
        }}>
        {cardDesc && cardDesc.props.children}
      </div>
    </div>
  );
}

Card.Cover = function Cover({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
};

Card.Desc = function Desc({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
};
