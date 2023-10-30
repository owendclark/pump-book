import {
  TextField,
  IconButton,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
  Tooltip,
  Button,
  Typography,
} from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";

const ExerciseNameField = ({ exercise, exerciseIndex, onExerciseChange }) => {
  return (
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Exercise Name"
        placeholder="E.g., Push-up"
        value={exercise.name || ""}
        onChange={(event) =>
          onExerciseChange(exerciseIndex, null, "name", event.target.value)
        }
        variant="outlined"
      />
    </Grid>
  );
};

const WeightTypeField = ({ exercise, exerciseIndex, onExerciseChange }) => {
  const weightTypes = [
    "Bodyweight",
    "Assisted",
    "Weighted",
    "Dumbbell",
    "Barbell",
    "Machine",
    "Cable",
    "EZ Bar",
    "Trap Bar",
  ];

  return (
    <Grid item xs={12}>
      <FormControl variant="outlined" fullWidth sx={{ mt: 2 }}>
        <InputLabel>Type</InputLabel>
        <Select
          label="Type"
          value={exercise.weightType || ""}
          onChange={(event) =>
            onExerciseChange(
              exerciseIndex,
              null,
              "weightType",
              event.target.value
            )
          }
        >
          {weightTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

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

const WeightField = ({
  exercise,
  exerciseIndex,
  set,
  setIndex,
  onExerciseChange,
}) => {
  return (
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Weight"
        placeholder={exercise.weightType === "Dumbbell" ? "20lbs" : "135lb"}
        value={set.weight || ""}
        onChange={(event) =>
          onExerciseChange(
            exerciseIndex,
            setIndex,
            "weight",
            event.target.value
          )
        }
        variant="outlined"
      />
    </Grid>
  );
};

const RepField = ({
  exercise,
  exerciseIndex,
  set,
  setIndex,
  onExerciseChange,
}) => {
  return (
    <Grid item xs={6}>
      <TextField
        fullWidth
        label="Reps"
        placeholder="10"
        value={set.reps || ""}
        onChange={(event) =>
          onExerciseChange(exerciseIndex, setIndex, "reps", event.target.value)
        }
        variant="outlined"
      />
    </Grid>
  );
};

const RemoveSetButton = ({
  exercise,
  exerciseIndex,
  setIndex,
  onExerciseChange,
}) => {
  return (
    exercise.sets.length > 1 && (
      <Grid item xs={6}>
        <Tooltip title="Remove Set">
          <span>
            <IconButton
              color="error"
              onClick={() => {
                const updatedExercise = { ...exercise };
                updatedExercise.sets.splice(setIndex, 1);
                onExerciseChange(
                  exerciseIndex,
                  null,
                  "sets",
                  updatedExercise.sets
                );
              }}
              aria-label="Remove Set"
              size="large"
              sx={{ borderRadius: "50%" }}
            >
              <RemoveIcon fontSize="large" />
            </IconButton>
          </span>
        </Tooltip>
      </Grid>
    )
  );
};

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
        exercise={exercise}
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

const AddSetButton = ({ exercise, exerciseIndex, onExerciseChange }) => {
  return (
    <Button
      startIcon={<AddIcon />}
      onClick={() => {
        const updatedExercise = { ...exercise };
        updatedExercise.sets.push({ reps: "", weight: "" });
        onExerciseChange(exerciseIndex, null, "sets", updatedExercise.sets);
      }}
    >
      Add Set
    </Button>
  );
};

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
