import React, { useState } from "react";
import TrainingDayCard from "../components/TrainingDayCard";
import AddTrainingDayButton from "../components/AddTrainingDayButton";

import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import {
  Container,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  IconButton,
  Slide,
} from "@mui/material";

const SlideUpTransition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Home = () => {
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
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Pump Book
        </Typography>

        <AddTrainingDayButton onClick={handleOpen} />

        <Dialog
          open={open}
          onClose={handleClose}
          fullScreen
          TransitionComponent={SlideUpTransition}
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
