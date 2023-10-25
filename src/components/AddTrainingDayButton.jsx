import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddTrainingDayButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      onClick={onClick}
      style={{ marginBottom: "16px" }}
    >
      Add Training Day
    </Button>
  );
};

export default AddTrainingDayButton;
