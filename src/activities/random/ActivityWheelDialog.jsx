import ActivityTypes from "@/utils/ActivityTypes";
import ActivityIcon from "@/layout/timetable-settings/ActivityIcon";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

/**
 * Renders the modal dialog that appears when the wheel has finished spinning
 * and the random activity has been generated.
 */
function ActivityWheelDialog(props) {
  const { open, activity, onClose, onConfirm } = props;

  return (
    <Dialog open={open} maxWidth="xs" fullWidth>
      <DialogTitle>Spin Result</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You got the{" "}
          <span
            className={`activity-title ${ActivityTypes.getActivityClassName(activity)}`}
          >
            "{ActivityTypes.getActivityName(activity)}"
          </span>{" "}
          activity!
        </DialogContentText>
          <div style={{ marginBlock: "1rem" }}>
            <ActivityIcon activityType={activity} />
          </div>
        <DialogContentText>
          Ready to dive in, or do you want to spin again?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onConfirm}>Confirm</Button>
        <Button variant="outlined" onClick={onClose}>Spin again</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ActivityWheelDialog;
