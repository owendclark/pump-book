import React from "react";
import ExerciseHeader from "./ExerciseHeader";
import ExerciseSet from "./ExerciseSet";
import AddSetButton from "./AddSetButton";

import { Box } from "@mui/material";

const SingleExercise = ({ exercise, exerciseIndex, onExerciseChange }) => {
  return (
    <Box key={exerciseIndex}>
      <ExerciseHeader
        exercise={exercise}
        exerciseIndex={exerciseIndex}
        onExerciseChange={onExerciseChange}
      />
      <Box>
        {exercise.sets.map((set, setIndex) => (
          <ExerciseSet
            key={setIndex}
            exercise={exercise}
            exerciseIndex={exerciseIndex}
            set={set}
            setIndex={setIndex}
            onExerciseChange={onExerciseChange}
          />
        ))}
        <Box pt={1.5}>
          <AddSetButton
            exercise={exercise}
            exerciseIndex={exerciseIndex}
            onExerciseChange={onExerciseChange}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SingleExercise;
