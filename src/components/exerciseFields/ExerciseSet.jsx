import React from "react";
import WeightField from "./WeightField";
import RepField from "./RepField";
import RemoveSetButton from "./RemoveSetButton";

import { Grid, Typography } from "@mui/material";
import RPEField from "./RPEField";

const ExerciseSet = ({
  exercise,
  exerciseIndex,
  set,
  setIndex,
  onExerciseChange,
}) => {
  const determineItemWidth = (item) => {
    switch (item) {
      case "setName":
        return 1.5;
      case "weightField":
        return exercise.sets.length > 1 ? 3.5 : 3.5;
      case "repField":
        return exercise.sets.length > 1 && exercise.weightType === "Bodyweight"
          ? 6
          : exercise.sets.length <= 1 && exercise.weightType === "Bodyweight"
          ? 8
          : exercise.sets.length > 1 && exercise.weightType !== "Bodyweight"
          ? 2.5
          : exercise.sets.length <= 1 && exercise.weightType !== "Bodyweight"
          ? 3.5
          : undefined;
      case "rpeField":
        return exercise.sets.length > 1 ? 2.5 : 3.5;
      case "removeSetButton":
        return 1;
      default:
        return undefined;
    }
  };

  return (
    <Grid container spacing={1} key={setIndex} alignItems="center" pt={1.5}>
      <Grid
        item
        xs={determineItemWidth("setName")}
        display="flex"
        justifyContent="center"
      >
        <Typography variant="body2" color="textSecondary">
          Set {setIndex + 1}
        </Typography>
      </Grid>
      {exercise.weightType !== "Bodyweight" && (
        <Grid item xs={determineItemWidth("weightField")}>
          <WeightField
            exercise={exercise}
            exerciseIndex={exerciseIndex}
            set={set}
            setIndex={setIndex}
            onExerciseChange={onExerciseChange}
          />
        </Grid>
      )}
      <Grid item xs={determineItemWidth("repField")}>
        <RepField
          exercise={exercise}
          exerciseIndex={exerciseIndex}
          set={set}
          setIndex={setIndex}
          onExerciseChange={onExerciseChange}
        />
      </Grid>
      <Grid item xs={determineItemWidth("rpeField")}>
        <RPEField
          exerciseIndex={exerciseIndex}
          set={set}
          setIndex={setIndex}
          onExerciseChange={onExerciseChange}
        />
      </Grid>
      {exercise.sets.length > 1 && (
        <Grid item xs={determineItemWidth("removeSetButton")}>
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
