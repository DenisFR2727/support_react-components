import { useRef, useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const refPlayerName = useRef();

  function handleClick() {
    if (refPlayerName.current.value.trim().length === 0) {
      return;
    }
    setEnteredPlayerName(refPlayerName.current.value);
    refPlayerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={refPlayerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
