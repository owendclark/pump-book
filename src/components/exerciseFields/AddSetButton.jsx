import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddSetButton = ({ exercise, exerciseIndex, onExerciseChange }) => {
  return (
    <Button
      variant="outlined"
      startIcon={<AddIcon />}
      onClick={() => {
        const updatedExercise = { ...exercise };
        updatedExercise.sets.push({ reps: "", weight: "" });
        onExerciseChange(exerciseIndex, null, "sets", updatedExercise.sets);
      }}
    >
      Add Set
    </Button>
  );
};

export default AddSetButton;
