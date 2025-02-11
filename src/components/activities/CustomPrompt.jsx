import React from "react";
import TextField from "@/components/ui/TextField";

import "@/styles/text-field.css";

function CustomPrompt() {
  const [text, setText] = React.useState("");

  return (
    <div style={{ marginTop: "2em", marginBottom: "2em" }}>
      <p>Enter your custom prompt here:</p>
      <TextField
        width="400px"
        placeholder="Enter prompt"
        rows="2"
        value={text}
        onChange={(event) => {console.log("Hello world"); setText(event.target.value)}}
      />
    </div>
  );
}

export default CustomPrompt;
