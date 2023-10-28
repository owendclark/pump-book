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
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

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
  ];

  const isLastExerciseFilled = () => {
    const lastExercise = exercises[exercises.length - 1];
    return (
      lastExercise.name &&
      lastExercise.sets &&
      lastExercise.reps &&
      (lastExercise.weightType === "Bodyweight" ||
        lastExercise.weight ||
        lastExercise.weightType === "")
    );
  };

  return (
    <Box px={2} py={3}>
      {exercises.map((exercise, index) => (
        <Box mb={3} key={index}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Exercise Name"
                placeholder="E.g., Push-up"
                value={exercise.name}
                onChange={(event) =>
                  onExerciseChange(index, "name", event.target.value)
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Type</InputLabel>
                <Select
                  value={exercise.weightType || ""}
                  onChange={(event) =>
                    onExerciseChange(index, "weightType", event.target.value)
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
            {exercise.weightType && exercise.weightType !== "Bodyweight" && (
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Weight"
                  placeholder={
                    exercise.weightType === "Dumbbell" ? "60lb" : "20lbs"
                  }
                  value={exercise.weight}
                  onChange={(event) =>
                    onExerciseChange(index, "weight", event.target.value)
                  }
                  variant="outlined"
                />
              </Grid>
            )}
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Sets"
                placeholder="3"
                value={exercise.sets}
                onChange={(event) =>
                  onExerciseChange(index, "sets", event.target.value)
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Reps"
                placeholder="10"
                value={exercise.reps}
                onChange={(event) =>
                  onExerciseChange(index, "reps", event.target.value)
                }
                variant="outlined"
              />
            </Grid>
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
