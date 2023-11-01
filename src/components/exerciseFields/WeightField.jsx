import React from "react";
import { Grid, TextField } from "@mui/material";

const WeightField = ({
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
        label="Weight"
        placeholder={exercise.weightType === "Dumbbell" ? "20lbs" : "135lb"}
        value={set.weight || ""}
        onChange={(event) =>
          onExerciseChange(
            exerciseIndex,
            setIndex,
            "weight",
            event.target.value
          )
        }
        variant="outlined"
      />
    </Grid>
  );
};

export default WeightField;
