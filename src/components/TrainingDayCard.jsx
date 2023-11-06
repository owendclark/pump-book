import React from "react";
import {
  Card,
  Typography,
  IconButton,
  Stack,
  Divider,
  useTheme,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TrainingDayCard = ({ date, exercises, onEdit, onDelete }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        margin: theme.spacing(2),
        p: theme.spacing(2),
        boxShadow: theme.shadows[1],
        "&:hover": { boxShadow: theme.shadows[8] },
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: theme.spacing(2) }}
      >
        <Typography variant="h6" color="primary" gutterBottom>
          {date}
        </Typography>
        <Box>
          <IconButton onClick={() => onEdit(date)} size="small" color="primary">
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => onDelete(date)}
            size="small"
            sx={{ ml: 1 }}
            color="error"
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Stack>
      <Divider sx={{ mb: theme.spacing(2) }} />
      <Stack spacing={2}>
        {exercises.map((exercise, index) => (
          <Stack key={`exercise-${index}`} spacing={1}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              {exercise.name} - {exercise.weightType}
            </Typography>
            {exercise.sets.map((set, setIndex) => (
              <Typography
                key={`set-${setIndex}`}
                variant="body2"
                color="text.secondary"
                gutterBottom
              >
                {`${set.reps} reps ${
                  set.weight
                    ? `@ ${set.weight}${
                        exercise.weightType === "Weighted" ? "kg" : ""
                      }`
                    : ""
                } RPE: ${set.RPE}`}
              </Typography>
            ))}
          </Stack>
        ))}
      </Stack>
    </Card>
  );
};

export default TrainingDayCard;
