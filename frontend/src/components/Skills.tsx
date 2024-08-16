import { useEffect } from 'react';
import Circle from './Circle';

export default function Skills() {
    useEffect(() => {
        // Optionally add any additional effect or state management here if needed
    }, []);

    return (
        <div className="flex flex-col justify-center h-screen relative">
            <div className="flex flex-row h-full justify-between">
                {/* Left icons */}
                <div className="flex flex-col h-full justify-center p-4 gap-10 w-full items-center">
                    <p>icon</p>
                    <p>icon</p>
                    <p>icon</p>
                    <p>icon</p>
                </div>

                {/* Center SVG with horizontal dashed circle */}
                <div className="flex flex-col h-full justify-center text-center gap-4">
                    <h1 className="text-5xl">
                        MY
                    </h1>
                    <h1 className="text-5xl">
                        SKILLS
                    </h1>
                </div>

                {/* Right icons */}
                <div className="flex flex-col h-full justify-center p-4 gap-10 items-center w-full">
                    <p>icon</p>
                    <p>icon</p>
                    <p>icon</p>
                    <p>icon</p>
                </div>
            </div>
        </div>
    );
}
