import ExerciseNameField from "./ExerciseNameField";
import WeightTypeField from "./WeightTypeField";

import { Grid } from "@mui/material";

const ExerciseHeader = ({ exercise, exerciseIndex, onExerciseChange }) => {
  return (
    <Grid container spacing={2}>
      <ExerciseNameField
        exercise={exercise}
        exerciseIndex={exerciseIndex}
        onExerciseChange={onExerciseChange}
      />
      <WeightTypeField
        exercise={exercise}
        exerciseIndex={exerciseIndex}
        onExerciseChange={onExerciseChange}
      />
    </Grid>
  );
};

export default ExerciseHeader;
