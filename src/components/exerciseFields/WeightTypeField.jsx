import { Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

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

export default WeightTypeField;
