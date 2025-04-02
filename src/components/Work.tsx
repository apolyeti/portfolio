import Card from "./Card";

export default function Work() {
  return (
    <div
      id="projects"
      className="h-screen w-screen flex flex-col md:flex-row items-center justify-evenly">
      <div className="flex flex-col items-center justify-center gap-2 w-1/2 font-bold text-center">
        <h1 className="">WHERE I'VE</h1>
        <h1 className="">BEEN</h1>
      </div>
      <div className="flex flex-col items-center md:justify-center gap-4 md:w-1/2 w-full h-3/5 md:h-2/5">
        <Card>
          <Card.Cover>
            <div className="flex flex-col items-center text-center text-sm md:text-base">
              <p>AMAZON</p>
            </div>
          </Card.Cover>
          <Card.Desc>
            <div className="p-3 flex flex-col items-center justify-evenly text-xs md:text-sm md:text-nowrap text-center">
              <p className="">SOFTWARE ENGINEER INTERN</p>
              <p className="italic">JUN 2025 — SEP 2025</p>
            </div>
          </Card.Desc>
        </Card>
        <Card>
          <Card.Cover>
            <div className="flex flex-col items-center text-center text-sm md:text-base">
              <p>BASKIN</p>
              <p>ENGINEERING</p>
              <p>AT UCSC</p>
            </div>
          </Card.Cover>
          <Card.Desc>
            <div className="p-3 flex flex-col items-center justify-evenly text-xs md:text-sm md:text-nowrap text-center">
              <p className="">INDIVIDUAL TUTOR AND READER</p>
              <p className="italic">JAN 2024 — APR 2025</p>
            </div>
          </Card.Desc>
        </Card>
        <Card>
          <Card.Cover>
            <div className="flex flex-col items-center text-center text-sm md:text-base">
              <p>HERE FOR YOU</p>
            </div>
          </Card.Cover>
          <Card.Desc>
            <div className="px-10 flex flex-col items-center text-[0.7rem] md:text-sm md:w-full text-center md:text-nowrap">
              <p>SOFTWARE ENGINEER</p>
              <p className="italic">AUG 2024 — JAN 2025</p>
            </div>
          </Card.Desc>
        </Card>
      </div>
    </div>
  );
}
