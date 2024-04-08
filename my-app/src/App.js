import React, { useState, useEffect } from "react";
import "./App.css";

const sentences = [
  "Clear your mind",
  "You did well",
  "Think of something peaceful",
  // Additional sentences...
];

function App() {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [phase, setPhase] = useState("fade-in"); // Handle sentence animation
  const [showButton, setShowButton] = useState(false); // To show the button after sentences

  useEffect(() => {
    let timeoutId;

    if (currentSentenceIndex < sentences.length - 1) {
      // Handle sentence animations
      if (phase === "fade-in") {
        timeoutId = setTimeout(() => setPhase("visible"), 2000);
      } else if (phase === "visible") {
        timeoutId = setTimeout(() => setPhase("fade-out"), 2000);
      } else if (phase === "fade-out") {
        timeoutId = setTimeout(() => {
          setCurrentSentenceIndex((prevIndex) => prevIndex + 1);
          setPhase("fade-in");
        }, 2000);
      }
    } else {
      // After the last sentence, show the button with a fade-in effect
      setShowButton(true);
    }

    return () => clearTimeout(timeoutId);
  }, [phase, currentSentenceIndex]);

  const playAudio = () => {
    const audio = new Audio("/Chimes.mp3");
    audio.play();
  };

  return (
    <div className="App">
      {currentSentenceIndex < sentences.length && (
        <div className={`sentence ${phase}`}>
          {sentences[currentSentenceIndex]}
        </div>
      )}
      {showButton && (
        <button className="fade-in-button" onClick={playAudio}>
          Play Sound
        </button>
      )}
    </div>
  );
}

export default App;
