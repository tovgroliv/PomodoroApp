import { useEffect, useState } from "react";

import Control from "../ui/Control";
import RoundProgressBar from "./RoundProgressBar";

import TimerCss from "./Timer.module.css";

const Timer = (props) => {
  const [started, setStarted] = useState(false);

  const timer = props.timer * 1000;
  const [totalTime, setTotalTime] = useState(0);
  const [end, setEnd] = useState(Date.now() + timer);
  const [pause, setPause] = useState(Date.now());

  const onPlayClick = () => {
    setStarted(!started);
    if (started) {
      setPause(Date.now());
    }
    else
    {
      setEnd(end + Date.now() - pause);
    }
  };

  useEffect(() => {
    if (started)
    {
      const interval = setInterval(() => {
        setTotalTime(end - Date.now());
      });
      return () => clearInterval(interval);
    }
  });

  let minutes = Math.floor(totalTime / 1000 / 60);
  let seconds = Math.floor(totalTime / 1000) % 60;

  return (
    <div className={TimerCss["timer"]}>
      <RoundProgressBar value={timer - totalTime} maxValue={timer}>
        <h1>{minutes < 10 ? 0 : ""}{minutes}:{seconds < 10 ? 0 : ""}{seconds}</h1>
        <Control playClick={onPlayClick} />
      </RoundProgressBar>
    </div>
  );
}

export default Timer;