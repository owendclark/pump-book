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

const ExerciseFields = ({
  exercises,
  onExerciseChange,
  handleAddExerciseField,
}) => {
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

  const isLastExerciseFilled = () => {
    const lastExercise = exercises[exercises.length - 1];

    // Check if the exercise has a name and a weight type
    if (!lastExercise.name || !lastExercise.weightType) {
      return false;
    }

    // If the exercise type requires weight, check if all sets have weights specified
    if (lastExercise.weightType !== "Bodyweight") {
      for (let set of lastExercise.sets) {
        if (!set.weight) {
          return false;
        }
      }
    }

    // Check if all sets have reps and weights specified
    for (let set of lastExercise.sets) {
      if (!set.reps || !set.weight) {
        return false;
      }
    }

    return true;
  };

  return (
    <Box px={2} py={3}>
      {exercises.map((exercise, exerciseIndex) => (
        <Box mb={3} key={exerciseIndex}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Exercise Name"
                placeholder="E.g., Push-up"
                value={exercise.name}
                onChange={(event) =>
                  onExerciseChange(
                    exerciseIndex,
                    null,
                    "name",
                    event.target.value
                  )
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth sx={{ mt: 2 }}>
                <InputLabel>Type</InputLabel>
                <Select
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
            {exercise.sets.map((set, setIndex) => (
              <Grid container spacing={2} key={setIndex}>
                <Grid item xs={12}>
                  <Typography variant="body2" color="textSecondary">
                    Set {setIndex + 1}
                  </Typography>
                </Grid>
                {exercise.weightType !== "Bodyweight" && (
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Weight"
                      placeholder={
                        exercise.weightType === "Dumbbell" ? "20lbs" : "135lb"
                      }
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
                )}
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Reps"
                    placeholder="10"
                    value={set.reps || ""}
                    onChange={(event) =>
                      onExerciseChange(
                        exerciseIndex,
                        setIndex,
                        "reps",
                        event.target.value
                      )
                    }
                    variant="outlined"
                  />
                </Grid>
                {exercise.sets.length > 1 && (
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
                )}
              </Grid>
            ))}
            <Button
              startIcon={<AddIcon />}
              onClick={() => {
                const updatedExercise = { ...exercise };
                updatedExercise.sets.push({ reps: "", weight: "" });
                onExerciseChange(
                  exerciseIndex,
                  null,
                  "sets",
                  updatedExercise.sets
                );
              }}
            >
              Add Set
            </Button>
          </Grid>
        </Box>
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
