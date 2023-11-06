import React from "react";
import { Grid, TextField } from "@mui/material";

const RPEField = ({ exerciseIndex, set, setIndex, onExerciseChange }) => {
  return (
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="RPE"
        placeholder="7"
        value={set.RPE || ""}
        onChange={(event) =>
          onExerciseChange(exerciseIndex, setIndex, "RPE", event.target.value)
        }
        variant="outlined"
      />
    </Grid>
  );
};

export default RPEField;
