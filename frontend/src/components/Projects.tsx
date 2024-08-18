import Card from "./Card";

export default function Projects() {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-4 w-full h-2/5">
                <Card cover="BASKIN ENGINEERING AT UCSC">
                    <p className="p-3">
                        Assisted over 100 students by delivering 4-6 hours of weekly instruction per week,
                        utilizing debugging tools such as GDB, Valgrind, and other UNIX utilities.
                    </p>
                </Card>
            </div>
            <div className="flex flex-row items-center justify-center gap-4 w-full h-1/5">
                <h1>
                    MY PROJECTS & EXPERIENCES
                </h1>
            </div>
            <div className="flex flex-row items-center justify-evenly gap-4 w-full h-2/5 p-4">
                <Card cover="LET IT OUT">
                    <p className="p-3">
                        let it out desc
                    </p>
                </Card>
                <Card cover="SPARKFIT">
                    <p className="p-3">
                        sparkfit desc
                    </p>
                </Card>
                <Card cover="RECISCALER">
                    <p className="p-3">
                        reciscaler desc
                    </p>
                </Card>
            </div>
        </div>
    )
}