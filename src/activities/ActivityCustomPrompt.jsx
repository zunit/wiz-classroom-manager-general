import React from "react";
import { TextField } from "@mui/material";

function ActivityCustomPrompt(props) {
  const { onChange, customPrompt } = props;

  return (
    <>
      <p>Enter the prompt:</p>
      <TextField
        value={customPrompt}
        onChange={onChange}
        multiline
        minRows={2}
        sx={{ width: "80%", minWidth: "400px", maxWidth: "700px" }}
      />
    </>
  );
}

export default ActivityCustomPrompt;
