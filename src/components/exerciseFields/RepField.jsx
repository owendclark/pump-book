import React from "react";
import { Grid, TextField } from "@mui/material";

const RepField = ({
  exercise,
  exerciseIndex,
  set,
  setIndex,
  onExerciseChange,
}) => {
  return (
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Reps"
        placeholder="10"
        value={set.reps || ""}
        onChange={(event) =>
          onExerciseChange(exerciseIndex, setIndex, "reps", event.target.value)
        }
        variant="outlined"
      />
    </Grid>
  );
};

export default RepField;
