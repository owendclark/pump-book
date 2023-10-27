import { TextField, IconButton, Box } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

const ExerciseFields = ({
  exercises,
  onExerciseChange,
  handleAddExerciseField,
}) => {
  const isLastExerciseFilled = () => {
    const lastExercise = exercises[exercises.length - 1];
    return (
      lastExercise.name &&
      lastExercise.name.trim().length > 0 &&
      lastExercise.sets &&
      lastExercise.sets.trim().length > 0 &&
      lastExercise.reps &&
      lastExercise.reps.trim().length > 0
    );
  };

  return (
    <Box>
      {exercises.map((exercise, index) => (
        <Box key={index} display="flex" alignItems="center" gap={2} mt={1}>
          <TextField
            key={index}
            margin="dense"
            label={"Exercise Name"}
            value={exercise.name}
            onChange={(event) =>
              onExerciseChange(index, "name", event.target.value)
            }
            placeholder="E.g., Squat"
            variant="outlined"
            sx={{ flex: 2 }}
          />
          <TextField
            key={index}
            margin="dense"
            label={"Sets"}
            value={exercise.sets}
            onChange={(event) =>
              onExerciseChange(index, "sets", event.target.value)
            }
            variant="outlined"
            sx={{ flex: 1 }}
          />
          <TextField
            key={index}
            margin="dense"
            label={"Reps"}
            value={exercise.reps}
            onChange={(event) =>
              onExerciseChange(index, "reps", event.target.value)
            }
            variant="outlined"
            sx={{ flex: 1 }}
          />
        </Box>
      ))}
      <Box mt={2}>
        <IconButton
          edge="end"
          color="primary"
          onClick={handleAddExerciseField}
          aria-label="Add Exercise"
          disabled={!isLastExerciseFilled()}
        >
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ExerciseFields;
