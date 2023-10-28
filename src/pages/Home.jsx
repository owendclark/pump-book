import React, { useState } from "react";
import gradientText from "../styles/gradientText";
import SlideUpTransition from "../styles/SlideUpTransition";
import TrainingDayCard from "../components/TrainingDayCard";
import ThemeToggler from "../components/ThemeToggler";
import ExerciseFields from "../components/ExerciseFields";

import {
  Container,
  Typography,
  Box,
  Dialog,
  DialogContent,
  TextField,
  IconButton,
  Fab,
} from "@mui/material";
import {
  Add as AddIcon,
  Close as CloseIcon,
  Save as SaveIcon,
} from "@mui/icons-material";

const Home = ({ isDarkMode, toggleDarkMode }) => {
  const [open, setOpen] = useState(false);
  const [editingDay, setEditingDay] = useState(null);
  const [newDate, setNewDate] = useState("");
  const [newExercises, setNewExercises] = useState([
    { name: "", sets: "", reps: "", weightType: "", weight: "" },
  ]);
  const [trainingDays, setTrainingDays] = useState([
    {
      date: "2023-10-24",
      exercises: [
        {
          name: "Squat",
          sets: "5",
          reps: "5",
          weightType: "Barbell",
          weight: "225",
        },
        {
          name: "Bench Press",
          sets: "3",
          reps: "8",
          weightType: "Barbell",
          weight: "185",
        },
      ],
    },
    {
      date: "2023-10-23",
      exercises: [
        {
          name: "Deadlift",
          sets: "3",
          reps: "4",
          weightType: "Barbell",
          weight: "315",
        },
        {
          name: "Pull-ups",
          sets: "3",
          reps: "10",
          weightType: "Bodyweight",
          weight: "",
        },
      ],
    },
  ]);

  const sortByDateDesc = (a, b) => new Date(b.date) - new Date(a.date);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingDay(null);
    setNewExercises([
      { name: "", sets: "", reps: "", weightType: "", weight: "" },
    ]);
  };

  const handleAdd = () => {
    if (
      newDate &&
      !newExercises.some(
        (exercise) =>
          !exercise.name.trim() ||
          !exercise.sets.trim() ||
          !exercise.reps.trim()
      )
    ) {
      const newEntry = {
        date: newDate,
        exercises: newExercises,
      };
      const updatedTrainingDays = editingDay
        ? trainingDays.filter((day) => day.date !== editingDay)
        : [...trainingDays];

      updatedTrainingDays.push(newEntry);
      updatedTrainingDays.sort(sortByDateDesc);

      setTrainingDays(updatedTrainingDays);
      setNewDate("");
      setNewExercises([{ name: "", sets: "", reps: "" }]);
      handleClose();
    }
  };

  const handleAddExerciseField = () => {
    setNewExercises([...newExercises, { exercise: "" }]);
  };

  const handleExerciseChange = (index, field, value) => {
    const changedExercises = [...newExercises];
    changedExercises[index][field] = value;
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
    setNewExercises(dayToEdit.exercises);
    handleOpen();
  };

  return (
    <Container maxWidth="sm">
      <Box my={4} textAlign="center">
        <Typography variant="h2" color="primary" gutterBottom sx={gradientText}>
          Pump Book
        </Typography>

        <ThemeToggler isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

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
          TransitionComponent={SlideUpTransition}
        >
          <Box
            sx={{
              p: 3,
              height: 64,
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
            <ExerciseFields
              exercises={newExercises}
              onExerciseChange={handleExerciseChange}
              handleAddExerciseField={handleAddExerciseField}
              sx={{ mt: 2 }}
            />
          </DialogContent>
        </Dialog>
        {trainingDays.length ? (
          trainingDays.map((day) => (
            <TrainingDayCard
              date={day.date}
              exercises={day.exercises}
              onEdit={handleEdit}
              onDelete={handleDelete}
              key={day.date}
              sx={{ mt: 3 }}
            />
          ))
        ) : (
          <Box mt={3}>
            <Typography variant="h6" color="textSecondary" align="center">
              No training days added yet. Click the + button to start!
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Home;
