import { useEffect, useState } from "react";
import { format } from "date-fns";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      // 60fps
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="text-lg md:text-xl lg:text-2xl ml-4 text-center items-center"
      style={{ fontVariantNumeric: "tabular-nums" }}>
      <span className="invisible">88:88:88.888</span>
      <span className="text-xl md:text-2xl lg:text-xl mr-3 md:mr-0">
        {format(time, "HH:mm:ss.SS")}
      </span>
      <span className="invisible">88:88:88.888</span>
    </div>
  );
}

export default Clock;
