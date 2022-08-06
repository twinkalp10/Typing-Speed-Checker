import React from "react";

function useWordGame() {
  const STARTING_TIME = 5;
  const [text, setText] = React.useState("");
  const [timeRemaining, setTimeRemaining] = React.useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = React.useState(false);
  const [wordCount, setWordCount] = React.useState(0);
  const [isTextDisabled, setIsTextDisabled] = React.useState(true);
  const textFocus = React.useRef(null);
  const startBtnFocus = React.useRef(null);

  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(STARTING_TIME);
    setText("");
    setWordCount(0);
    setIsTextDisabled(false);
    textFocus.current.disabled = false;
    textFocus.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text));
    setIsTextDisabled(true);
    startBtnFocus.current.disabled = false;
    startBtnFocus.current.focus();
  }

  function handleTextChange(event) {
    const { value } = event.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordsArray = text.trim().split(" ");
    const filteredWordsArray = wordsArray.filter((word) => word !== "");
    console.log(filteredWordsArray.length);

    return filteredWordsArray.length;
  }

  React.useEffect(() => {
    if (isTimeRunning === true && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [isTimeRunning, timeRemaining]);

  return {
    text,
    handleTextChange,
    isTextDisabled,
    textFocus,
    timeRemaining,
    isTimeRunning,
    startGame,
    startBtnFocus,
    wordCount,
  };
}

export default useWordGame;
