import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Stack,
  alpha,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TrainingDayCard = ({ date, exercises, onEdit, onDelete }) => {
  return (
    <Card
      elevation={0}
      sx={{
        mb: 2,
        borderRadius: 2,
        border: "1px solid",
        borderColor: alpha("#007BFF", 0.3),
        position: "relative",
        overflow: "hidden",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          fontFamily="serif"
          color="primary"
          gutterBottom
        >
          {date}
        </Typography>

        <Stack spacing={1} mb={2}>
          {exercises.map((exercise, index) => (
            <Typography key={index} variant="body2">
              {exercise}
            </Typography>
          ))}
        </Stack>

        <Stack direction="row" spacing={1} justifyContent="flex-end">
          <IconButton onClick={() => onEdit(date)} size="large" color="primary" sx={{ zIndex: 1 }}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => onDelete(date)} size="large" color="error" sx={{ zIndex: 1 }}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </CardContent>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(120deg, transparent 0%, transparent 70%, #007BFF 70%)",
          transform: "skewX(-15deg)",
          transformOrigin: "bottom left",
          opacity: 0.06,
        }}
      />
    </Card>
  );
};

export default TrainingDayCard;
