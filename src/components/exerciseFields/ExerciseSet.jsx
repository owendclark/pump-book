import React from "react";
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
    <Grid container spacing={2} key={setIndex} alignItems="center" pt={2}>
      <Grid item xs={2} display="flex" justifyContent="center">
        <Typography variant="body2" color="textSecondary">
          Set {setIndex + 1}
        </Typography>
      </Grid>
      {exercise.weightType !== "Bodyweight" && (
        <Grid item xs={exercise.sets.length > 1 ? 4 : 5}>
          <WeightField
            exercise={exercise}
            exerciseIndex={exerciseIndex}
            set={set}
            setIndex={setIndex}
            onExerciseChange={onExerciseChange}
          />
        </Grid>
      )}
      <Grid
        item
        xs={
          exercise.sets.length > 1 && exercise.weightType === "Bodyweight"
            ? 8
            : exercise.sets.length <= 1 && exercise.weightType === "Bodyweight"
            ? 10
            : exercise.sets.length > 1 && exercise.weightType !== "Bodyweight"
            ? 4
            : exercise.sets.length <= 1 && exercise.weightType !== "Bodyweight"
            ? 5
            : undefined
        }
      >
        <RepField
          exercise={exercise}
          exerciseIndex={exerciseIndex}
          set={set}
          setIndex={setIndex}
          onExerciseChange={onExerciseChange}
        />
      </Grid>
      {exercise.sets.length > 1 && (
        <Grid item xs={2}>
          <RemoveSetButton
            exercise={exercise}
            exerciseIndex={exerciseIndex}
            setIndex={setIndex}
            onExerciseChange={onExerciseChange}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default ExerciseSet;
