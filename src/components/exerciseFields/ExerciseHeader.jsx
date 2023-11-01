import React from "react";
import ExerciseNameField from "./ExerciseNameField";
import WeightTypeField from "./WeightTypeField";

import { Grid } from "@mui/material";

const ExerciseHeader = ({ exercise, exerciseIndex, onExerciseChange }) => {
  return (
    <Grid container>
      <WeightTypeField
        exercise={exercise}
        exerciseIndex={exerciseIndex}
        onExerciseChange={onExerciseChange}
      />
      <ExerciseNameField
        exercise={exercise}
        exerciseIndex={exerciseIndex}
        onExerciseChange={onExerciseChange}
      />
    </Grid>
  );
};

export default ExerciseHeader;
