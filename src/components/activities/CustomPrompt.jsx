import React from "react";
import TextField from "@mui/material/TextField";

function CustomPrompt() {
  const [text, setText] = React.useState("");

  return (
    <div style={{ marginTop: "2em", marginBottom: "2em" }}>
      <p>Enter your custom prompt here:</p>
      <TextField
        id="custom-prompt-field"
        placeholder="Enter prompt"
        multiline
        rows={2}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </div>
  );
}

export default CustomPrompt;
