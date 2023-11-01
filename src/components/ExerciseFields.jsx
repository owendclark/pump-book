import React from "react";
import SingleExercise from "./exerciseFields/SingleExercise";

import { IconButton, Box, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ExerciseFields = ({
  exercises,
  onExerciseChange,
  handleAddExerciseField,
}) => {
  const isLastExerciseFilled = () => {
    const lastExercise = exercises[exercises.length - 1];

    // Check if the exercise has a name and a weight type
    if (!lastExercise.name || !lastExercise.weightType) {
      return false;
    }

    // If the exercise type requires weight, check if all sets have weights specified and check if all sets have reps and weights specified
    for (let set of lastExercise.sets) {
      if (
        !set.reps ||
        (lastExercise.weightType !== "Bodyweight" && !set.weight)
      ) {
        return false;
      }
    }

    return true;
  };

  return (
    <Box px={2} py={3}>
      {exercises.map((exercise, exerciseIndex) => (
        <SingleExercise
          key={exerciseIndex}
          exercise={exercise}
          exerciseIndex={exerciseIndex}
          onExerciseChange={onExerciseChange}
        />
      ))}
      <Box mt={2} display="flex" justifyContent="center">
        <Tooltip title="Add Another Exercise">
          <span>
            <IconButton
              color="primary"
              onClick={handleAddExerciseField}
              aria-label="Add Exercise"
              disabled={!isLastExerciseFilled()}
              size="large"
              sx={{ borderRadius: "50%" }}
            >
              <AddIcon fontSize="large" />
            </IconButton>
          </span>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default ExerciseFields;
