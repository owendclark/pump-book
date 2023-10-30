import WeightField from "./WeightField";
import RepField from "./RepField";
import RemoveSetButton from "./RemoveSetButton";

import { Grid, Typography } from "@mui/material";

const ExerciseSet = ({
  exercise,
  exerciseIndex,
  set,
  setIndex,
  onExerciseChange,
}) => {
  return (
    <Grid container spacing={2} key={setIndex}>
      <Grid item xs={12}>
        <Typography variant="body2" color="textSecondary">
          Set {setIndex + 1}
        </Typography>
      </Grid>
      {exercise.weightType !== "Bodyweight" && (
        <WeightField
          exercise={exercise}
          exerciseIndex={exerciseIndex}
          set={set}
          setIndex={setIndex}
          onExerciseChange={onExerciseChange}
        />
      )}
      <RepField
        exerciseIndex={exerciseIndex}
        set={set}
        setIndex={setIndex}
        onExerciseChange={onExerciseChange}
      />
      <RemoveSetButton
        exercise={exercise}
        exerciseIndex={exerciseIndex}
        setIndex={setIndex}
        onExerciseChange={onExerciseChange}
      />
    </Grid>
  );
};

export default ExerciseSet;
