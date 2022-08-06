import React from "react";
import useWordGame from "./hooks/useWordGame";

function App() {
  const {
    text,
    handleTextChange,
    isTextDisabled,
    textFocus,
    timeRemaining,
    isTimeRunning,
    startGame,
    startBtnFocus,
    wordCount,
  } = useWordGame();

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        disabled={isTextDisabled}
        ref={textFocus}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button
        disabled={isTimeRunning}
        onClick={() => startGame()}
        ref={startBtnFocus}
      >
        Start
      </button>
      <h1>Total Word Conut: {wordCount}</h1>
    </div>
  );
}

export default App;
