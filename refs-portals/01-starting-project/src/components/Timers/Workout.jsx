import React from "react";

export default function Workout({ title, description, time, onComplete }) {
  const timerRef = React.useRef(null);

  function handleStartWorkout() {
    // Todo: Start timer
    if (timerRef.current) return;
    timerRef.current = setTimeout(() => {
      onComplete(); // ← викликаємо напряму
      timerRef.current = null;
    }, time);
  }

  function handleStopWorkout() {
    // Todo: Stop timer
    clearTimeout(timerRef.current);
    timerRef.current = null;
    onComplete();
  }

  return (
    <article className="workout">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{time}</p>
      <p>
        <button onClick={handleStartWorkout}>Start</button>
        <button onClick={handleStopWorkout}>Stop</button>
      </p>
    </article>
  );
}
