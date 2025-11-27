import React, { useState } from "react";

export default function PythonQuestionCard({ prompt }) {
  const [revealedAnswers, setRevealedAnswers] = useState({});

//   if (!prompt) return null;

  const handleClick = (option) => {
    if (revealedAnswers[option]) return;

    setRevealedAnswers((prev) => ({
      ...prev,
      [option]: option === prompt.correctAns ? "correct" : "wrong",
    }));
  };

  return (
    <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
      <h2>{prompt.question}</h2>

      <img
        src={prompt.img}
        alt="img not displaying"
        width="150"
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "1rem" }}>
        {prompt.optionsList.map((option) => {
          const status = revealedAnswers[option];
          const bgColor =
            status === "correct"
              ? "#4CAF50"
              : status === "wrong"
              ? "#f44336"
              : "#eee";
          const textColor = status ? "#fff" : "#000";

          return (
            <button
              key={option}
              onClick={() => handleClick(option)}
              style={{
                padding: "10px",
                fontSize: "16px",
                backgroundColor: bgColor,
                color: textColor,
                border: "none",
                borderRadius: "5px",
                cursor: status ? "default" : "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              {option}
            </button>
          );
        })}
        <p></p>
      </div>
    </div>
  );
}
