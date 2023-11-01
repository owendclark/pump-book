import React from "react";
import { Grid, TextField } from "@mui/material";

const ExerciseNameField = ({ exercise, exerciseIndex, onExerciseChange }) => {
  return (
    <Grid item xs={12} pt={2}>
      <TextField
        fullWidth
        label="Exercise Name"
        placeholder="E.g., Push-up"
        value={exercise.name || ""}
        onChange={(event) =>
          onExerciseChange(exerciseIndex, null, "name", event.target.value)
        }
        variant="outlined"
      />
    </Grid>
  );
};

export default ExerciseNameField;
