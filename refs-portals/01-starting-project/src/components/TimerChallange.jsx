import { useRef, useState } from "react";
import "../index.css";
import ResultModal from "./ResultModal";

// let timer;
// showModal(); - default fuature browser

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef(null);
  const dialog = useRef();

  const [timerExpired, setTimerExpired] = useState(false);
  const [startedTimer, setStartedTimer] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);
    setStartedTimer(true);
  }
  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={startedTimer ? handleStop : handleStart}>
            {startedTimer ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={startedTimer ? "active" : undefined}>
          {startedTimer ? "Time is rinnig..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
