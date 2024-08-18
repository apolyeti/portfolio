import Card from "./Card";

export default function Projects() {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-4 w-full h-2/5">
                <Card cover="BASKIN ENGINEERING AT UCSC">
                    <div className="p-3 flex flex-col items-center justify-evenly">
                        <p className="">
                            Individual Tutor and Reader
                        </p>
                        <p className="italic">
                            January 2024 — Present
                        </p>
                    </div>
                </Card>
            </div>
            <div className="flex flex-row items-center justify-center gap-4 w-full h-1/5">
                <h1>
                    MY PROJECTS & EXPERIENCES
                </h1>
            </div>
            <div className="flex flex-row items-center justify-evenly gap-4 w-full h-2/5 p-4">
                <Card cover="LET IT OUT">
                    <div className="p-3 flex flex-col justify-evenly text-sm">
                        <p className="">
                            CalHacks 10.0 Submission
                        </p>
                        <p className="">
                            AI assisted journaling tool
                        </p>
                        <p>
                            using sentiment analysis
                        </p>
                    </div>
                </Card>
                <Card cover="SPARKFIT">
                    <div className="p-3 flex flex-col justify-evenly text-sm">
                        <p className="">
                            AI assisted outfit planner
                        </p>
                        <p>
                            based on local weather data
                        </p>
                        <p>
                            using image recognition
                        </p>
                        <p>
                            and fashion datasets
                        </p>
                    </div>
                </Card>
                <Card cover="RECISCALER">
                    <div className="p-3 flex flex-col justify-evenly text-sm">
                        <p>
                            Full-stack web app using
                        </p>
                        <p>
                            web scraping technology to 
                        </p>
                        <p>
                            quickly obtain ingredient 
                        </p>
                        <p>
                            quantities for recipes and 
                        </p>
                        <p>
                            scale them to desired
                        </p>
                        <p>
                            serving sizes
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    )
}