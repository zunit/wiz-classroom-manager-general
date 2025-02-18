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

function ActivityWheelDialog(props) {
  const { open, activity, onClose, onConfirm } = props;

  return (
    <Dialog open={open} maxWidth="xs" fullWidth>
      <DialogTitle>Spin Result</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You got the "{ActivityTypes.getActivityName(activity)}" activity!
          <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <ActivityIcon activityType={activity} />
          </div>
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
