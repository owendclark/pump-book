import React, { useState } from "react";

import {
  Container,
  Typography,
  Box,
  Dialog,
  DialogContent,
  TextField,
  IconButton,
  Slide,
  Fab,
  Card,
  CardContent,
  Stack,
  Switch,
  alpha,
  Divider,
} from "@mui/material";
import {
  Add as AddIcon,
  Close as CloseIcon,
  Save as SaveIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from "@mui/icons-material";

const FluidTransition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} easing="ease-in-out" />;
});

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
        <Typography key={index} variant="body2" my={0.5}>
          {exercise}
        </Typography>
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

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(120deg, transparent 0%, transparent 65%, #007BFF 65%)",
          transform: `skewX(${Math.random() * -20 - 10}deg)`,
          transformOrigin: "bottom left",
          opacity: 0.08,
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: `skewX(${Math.random() * -25 - 5}deg) scale(1.02)`,
          },
        }}
      />
    </Card>
  );
};

const Home = ({ isDarkMode, toggleDarkMode }) => {
  const [open, setOpen] = useState(false);
  const [editingDay, setEditingDay] = useState(null);
  const [newDate, setNewDate] = useState("");
  const [newExercises, setNewExercises] = useState([{ exercise: "" }]);
  const [trainingDays, setTrainingDays] = useState([
    { date: "2023-10-24", exercises: ["Squat: 5x5", "Bench: 3x8"] },
    { date: "2023-10-23", exercises: ["Deadlift: 3x4", "Pull-ups: 3x10"] },
  ]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNewExercises([{ exercise: "" }]);
  };

  const handleAdd = () => {
    if (
      newDate &&
      !newExercises.some((exercise) => !exercise.exercise.trim())
    ) {
      const updatedTrainingDays = editingDay
        ? trainingDays.filter((day) => day.date !== editingDay)
        : [...trainingDays];

      const newDays = [
        { date: newDate, exercises: newExercises.map((e) => e.exercise) },
        ...updatedTrainingDays,
      ].sort((a, b) => new Date(b.date) - new Date(a.date));

      setTrainingDays(newDays);
      setNewDate("");
      setNewExercises([{ exercise: "" }]);
      handleClose();
    }
  };

  const handleAddExerciseField = () => {
    setNewExercises([...newExercises, { exercise: "" }]);
  };

  const handleExerciseChange = (index, value) => {
    const changedExercises = [...newExercises];
    changedExercises[index].exercise = value;
    setNewExercises(changedExercises);
  };

  const handleDelete = (dateToDelete) => {
    const updatedTrainingDays = trainingDays.filter(
      (day) => day.date !== dateToDelete
    );
    setTrainingDays(updatedTrainingDays);
  };

  const handleEdit = (dateToEdit) => {
    const dayToEdit = trainingDays.find((day) => day.date === dateToEdit);
    setEditingDay(dayToEdit.date);
    setNewDate(dayToEdit.date);
    setNewExercises(dayToEdit.exercises.map((exercise) => ({ exercise })));
    handleOpen();
  };

  return (
    <Container maxWidth="sm">
      <Box my={4} textAlign="center">
        <Typography
          variant="h2"
          color="primary"
          gutterBottom
          sx={{
            fontWeight: "bold",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: 2,
            background: "linear-gradient(120deg, #007BFF, #00BFBB)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          }}
        >
          Pump Book
        </Typography>

        <Box
          sx={{
            position: "fixed",
            top: 16,
            right: 16,
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          {isDarkMode ? (
            <Brightness7Icon sx={{ color: alpha("#007BFF", 0.7) }} />
          ) : (
            <Brightness4Icon sx={{ color: alpha("#00BFBB", 0.7) }} />
          )}
          <Switch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            color="default"
          />
        </Box>

        <Fab
          color="primary"
          aria-label="add"
          onClick={handleOpen}
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 1000,
          }}
        >
          <AddIcon />
        </Fab>

        <Dialog
          open={open}
          onClose={handleClose}
          fullScreen
          TransitionComponent={FluidTransition}
        >
          <Box
            sx={{
              p: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: (theme) => theme.palette.primary.light,
            }}
          >
            <IconButton edge="start" color="inherit" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" color="secondary">
              {editingDay ? "Edit Training Day" : "Add Training Day"}
            </Typography>
            <IconButton color="secondary" onClick={handleAdd}>
              <SaveIcon />
            </IconButton>
          </Box>
          <DialogContent>
            <TextField
              margin="dense"
              label="Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
            />
            {newExercises.map((e, index) => (
              <TextField
                key={index}
                margin="dense"
                label={`Exercise ${index + 1}`}
                fullWidth
                value={e.exercise}
                onChange={(event) =>
                  handleExerciseChange(index, event.target.value)
                }
                placeholder="E.g., Squat: 5x5"
              />
            ))}
            <IconButton
              edge="end"
              color="primary"
              onClick={handleAddExerciseField}
            >
              <AddIcon />
            </IconButton>
          </DialogContent>
        </Dialog>
        {trainingDays.map((day) => (
          <Box mt={3} key={day.date}>
            <TrainingDayCard
              date={day.date}
              exercises={day.exercises}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Home;
