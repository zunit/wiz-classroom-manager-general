import ModalDialog from "@/components/ui/ModalDialog";
import TextField from "@/components/ui/TextField";
import React from "react";

function ExtendTimerDialog(props) {
  const [extendTimeBy, setExtendTimeBy] = React.useState("");

  function handleClose() {
    props.setTimeLeft((timeLeft) => timeLeft + extendTimeBy);
  }

  return (
    <ModalDialog
      isShown={props.isShown}
      closeModal={props.closeModal}
      onClose={handleClose}
    >
      <p>Extend time by (in seconds):</p>
      <TextField
        value={extendTimeBy}
        onChange={(event) => setExtendTimeBy(event.target.value)}
      />
    </ModalDialog>
  );
}

export default ExtendTimerDialog;
