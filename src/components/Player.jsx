import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enterPlayerName, setEnterPlayerName] = useState("");

  function handleClick(params) {
    setEnterPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enterPlayerName ? enterPlayerName : "unknown entity"}</h2>
      <p>
        <input placeholder="Enter the Name" type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
