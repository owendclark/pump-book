import { TextField, IconButton } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

const ExerciseFields = ({
  exercises,
  onExerciseChange,
  handleAddExerciseField,
  newExercises,
}) => {
  const isLastExerciseFilled = () => {
    const lastExercise = newExercises[newExercises.length - 1].exercise;
    return lastExercise.trim().length > 0;
  };

  return (
    <>
      {exercises.map((e, index) => (
        <TextField
          key={index}
          margin="dense"
          label={`Exercise ${index + 1}`}
          fullWidth
          variant="outlined"
          value={e.exercise}
          onChange={(event) => onExerciseChange(index, event.target.value)}
          placeholder="E.g., Squat: 5x5"
          sx={{ mt: 1 }}
        />
      ))}
      <IconButton
        edge="end"
        color="primary"
        onClick={handleAddExerciseField}
        aria-label="Add Exercise"
        disabled={!isLastExerciseFilled()}
      >
        <AddIcon />
      </IconButton>
    </>
  );
};

export default ExerciseFields;
