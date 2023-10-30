import { Grid, IconButton, Tooltip } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";

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

export default RemoveSetButton;
