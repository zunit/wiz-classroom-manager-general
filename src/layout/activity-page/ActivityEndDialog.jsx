import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tooltip,
} from "@mui/material";

function ActivityEndDialog(props) {
  const { open, onClose } = props;
  return (
    <Dialog maxWidth="xs" fullWidth open={open} onClose={onClose}>
      <DialogTitle>You've finished the activity!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you ready for the next activity?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={(event) => onClose(event, "goToNextActivity")}
        >
          <span className="material-symbols-rounded">check</span>Yes
        </Button>
        <Tooltip title="Extend the timer of the current activity by another minute">
          <Button
            variant="outlined"
            onClick={(event) => onClose(event, "extendTime")}
          >
            <span className="material-symbols-rounded">timer</span>Wait!
          </Button>
        </Tooltip>
      </DialogActions>
    </Dialog>
  );
}

export default ActivityEndDialog;
