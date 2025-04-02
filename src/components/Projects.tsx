import Card from "./Card";

export default function Projects() {
  return (
    <div
      id="projects"
      className="h-screen w-screen flex flex-col md:flex-row-reverse items-center justify-evenly">
      <div className="flex flex-col items-center justify-center gap-2 w-1/2 font-bold text-center">
        <h1 className="">WHAT I'VE</h1>
        <h1 className="">WORKED ON</h1>
      </div>
      <div className="flex flex-col items-center md:justify-center gap-4 md:w-1/2 w-full h-3/5 md:h-2/5">
        <Card reverse>
          <Card.Cover>
            <div className="flex flex-col items-center text-center text-sm md:text-base">
              <p>CAFE HOPPER</p>
            </div>
          </Card.Cover>
          <Card.Desc>
            <div className="px-10 flex flex-col items-center text-[0.7rem] md:text-sm md:w-full text-center md:text-nowrap">
              {/* <p>Collaborated with a team to</p>
              <p>develop a web application</p>
              <p>for connecting communities</p>
              <p>amd requesting resources</p>
              <p>for those in need</p> */}
              <p>BACKEND LEAD</p>
            </div>
          </Card.Desc>
        </Card>
        <Card reverse>
          <Card.Cover>
            <div className="flex flex-col items-center text-center text-sm md:text-base">
              <p>SPARKFIT</p>
            </div>
          </Card.Cover>
          <Card.Desc>
            <div className="p-3 flex flex-col items-center justify-evenly text-xs md:text-sm md:text-nowrap text-center">
              <p className="">MACHINE LEARNING BASED APPLICATION</p>
            </div>
          </Card.Desc>
        </Card>
      </div>
      {/* <div className="flex flex-row items-center justify-evenly md:justify-center gap-10 w-full h-2/5 px-8">
        <Card>
          <Card.Cover>
            <div className="flex flex-col items-center text-center">
              <a
                href="https://devpost.com/software/let-it-out-b2xp8u"
                target="_blank">
                <p>LET</p>
                <p>IT OUT</p>
              </a>
            </div>
          </Card.Cover>
          <Card.Desc>
            <div
              className="p-3 flex flex-col justify-evenly text-sm"
              onClick={() =>
                window.open("https://devpost.com/software/let-it-out-b2xp8u")
              }>
              <p className="">CalHacks 10.0 Submission</p>
              <p className="">AI assisted journaling tool</p>
              <p>using sentiment analysis</p>
            </div>
          </Card.Desc>
        </Card>
        <Card>
          <Card.Cover>
            <div className="flex flex-col items-center text-center">
              <a href="https://github.com/apolyeti/sparkfit" target="_blank">
                SPARKFIT
              </a>
            </div>
          </Card.Cover>
          <Card.Desc>
            <div
              className="p-3 flex flex-col justify-evenly text-sm"
              onClick={() => {
                window.open("https://github.com/apolyeti/sparkfit");
              }}>
              <p className="">AI assisted outfit planner</p>
              <p>based on local weather data</p>
              <p>using image recognition</p>
              <p>and fashion datasets</p>
            </div>
          </Card.Desc>
        </Card>
        <Card>
          <Card.Cover>
            <a href="https://github.com/apolyeti/recipe-client" target="_blank">
              RECI-SCALER
            </a>
          </Card.Cover>
          <Card.Desc>
            <div
              className="p-3 flex flex-col justify-evenly text-sm"
              onClick={() =>
                window.open("https://github.com/apolyeti/recipe-client")
              }>
              <p>Full-stack web app using</p>
              <p>web scraping technology to</p>
              <p>quickly obtain ingredient</p>
              <p>quantities for recipes and</p>
              <p>scale them to desired</p>
              <p>serving sizes</p>
            </div>
          </Card.Desc>
        </Card>
      </div> */}
    </div>
  );
}
