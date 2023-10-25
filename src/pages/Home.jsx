import TrainingDayCard from "../components/TrainingDayCard";
import AddTrainingDayButton from "../components/AddTrainingDayButton";

import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

const Home = () => {
  const [open, setOpen] = useState(false);
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
    if (newDate && !newExercises.some((exercise) => !exercise.exercise.trim())) {
      const newDays = [
        { date: newDate, exercises: newExercises.map((e) => e.exercise) },
        ...trainingDays,
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

  return (
    <Container maxWidth="sm">
      <Box my={4} textAlign="center">
        <Typography variant="h4" color="primary" gutterBottom>
          Pump Book
        </Typography>
        <AddTrainingDayButton onClick={handleOpen} />
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add New Training Day</DialogTitle>
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
            <Button onClick={handleAddExerciseField} color="primary">
              Add Exercise
            </Button>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleAdd} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
        {trainingDays.map((day) => (
          <Box mt={3} key={day.date}>
            <TrainingDayCard date={day.date} exercises={day.exercises} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Home;
