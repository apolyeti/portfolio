import Card from "./Card";

export default function Projects() {
  return (
    <div
      id="projects"
      className="h-screen flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center gap-4 w-full h-1/2">
        <Card>
          <Card.Cover>
            <div className="flex flex-col items-center text-center">
              <p>BASKIN</p>
              <p>ENGINEERING</p>
              <p>AT UCSC</p>
            </div>
          </Card.Cover>
          <Card.Desc>
            <div className="p-3 flex flex-col items-center justify-evenly">
              <p className="">Individual Tutor and Reader</p>
              <p className="italic">January 2024 — Present</p>
            </div>
          </Card.Desc>
        </Card>
        <Card>
          <Card.Cover>
            <div className="flex flex-col items-center text-center">
              <p>HERE FOR YOU</p>
            </div>
          </Card.Cover>
          <Card.Desc>
            <div className="p-3 flex flex-col items-center justify-evenly">
              <p className="">Collaborated with a team to</p>
              <p>develop a web application</p>
              <p>for connecting communities</p>
              <p className="">amd requesting resources</p>
              <p>for those in need</p>
            </div>
          </Card.Desc>
        </Card>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-1/5 gap-2">
        <h1 className="">MY EXPERIENCES</h1>
        <h1>&</h1>
        <h1>PROJECTS</h1>
      </div>
      <div className="flex flex-row items-center justify-evenly gap-10 w-full h-2/5 p-8">
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
      </div>
    </div>
  );
}
