import cardBackground from "../styles/cardBackground";

import {
  Card,
  Typography,
  IconButton,
  Stack,
  alpha,
  Box,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TrainingDayCard = ({ date, exercises, onEdit, onDelete }) => {
  return (
    <Card
      sx={{
        mb: 2,
        p: 2,
        boxShadow: 2,
        borderRadius: "16px",
        position: "relative",
      }}
    >
      <Typography variant="h6" color="primary">
        {date}
      </Typography>
      <Divider sx={{ my: 1.5, borderColor: alpha("#007BFF", 0.3) }} />
      {exercises.map((exercise, index) => (
        <Box>
          <Typography key={index} variant="body2" my={0.5}>
            {exercise.weightType} {exercise.name}
          </Typography>
          {exercise.sets.map((set, index) => (
            <Typography key={index} variant="body2" my={0.5}>
              {set.reps} Reps with {set.weight}{" "}
              {exercise.weightType === "Weighted" ? "added" : ""}
            </Typography>
          ))}
        </Box>
      ))}
      <Stack direction="row" justifyContent="flex-end" spacing={1} mt={2}>
        <IconButton
          onClick={() => onEdit(date)}
          size="small"
          color="primary"
          sx={{ zIndex: 1 }}
        >
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton
          onClick={() => onDelete(date)}
          size="small"
          color="error"
          sx={{ zIndex: 1 }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Stack>

      <Box sx={cardBackground} />
    </Card>
  );
};

export default TrainingDayCard;
