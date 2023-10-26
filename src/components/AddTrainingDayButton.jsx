import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddTrainingDayButton = ({ onClick }) => {
  return (
    <Fab
      color="primary"
      aria-label="add"
      onClick={onClick}
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        zIndex: 1000,
      }}
    >
      <AddIcon />
    </Fab>
  );
};

export default AddTrainingDayButton;
