import ExerciseHeader from "./ExerciseHeader";
import ExerciseSet from "./ExerciseSet";
import AddSetButton from "./AddSetButton";

import { Box } from "@mui/material";

const SingleExercise = ({ exercise, exerciseIndex, onExerciseChange }) => {
  return (
    <Box mb={3} key={exerciseIndex}>
      <ExerciseHeader
        exercise={exercise}
        exerciseIndex={exerciseIndex}
        onExerciseChange={onExerciseChange}
      />
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
      <AddSetButton
        exercise={exercise}
        exerciseIndex={exerciseIndex}
        onExerciseChange={onExerciseChange}
      />
    </Box>
  );
};

export default SingleExercise;
