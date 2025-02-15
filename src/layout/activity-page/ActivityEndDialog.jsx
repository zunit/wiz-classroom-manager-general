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
  const { open, onConfirm, onExtendTimer } = props;
  return (
    <Dialog open={open} maxWidth="xs" fullWidth>
      <DialogTitle>You've finished the activity!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you ready for the next activity?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onConfirm}>
          <span className="material-symbols-rounded">check</span>Yes
        </Button>
        <Tooltip title="Extend the timer of the current activity by another minute">
          <Button variant="outlined" onClick={onExtendTimer}>
            <span className="material-symbols-rounded">timer</span>Wait!
          </Button>
        </Tooltip>
      </DialogActions>
    </Dialog>
  );
}

export default ActivityEndDialog;
