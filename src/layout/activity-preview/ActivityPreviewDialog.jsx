import React from "react";
import { AppContext } from "@/context/AppContext";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

/**
 * Renders the modal dialog when you interact with the activity preview.
 */
function ActivityPreviewDialog(props) {
  const { chunks, currentChunkIndex } = React.useContext(AppContext);
  const { open, onClose, onConfirm } = props;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {currentChunkIndex < chunks.length - 1
            ? "Do you want to end the current activity and move to the next one?"
            : "Do you want to end the class now?"}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onConfirm}>
          <span className="material-symbols-rounded">check</span>Yes
        </Button>
        <Button variant="outlined" onClick={onClose}>
          <span className="material-symbols-rounded">close</span>No
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ActivityPreviewDialog;
