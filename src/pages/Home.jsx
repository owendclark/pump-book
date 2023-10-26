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
  Switch, //Maybe Not
  alpha,
  Divider,
} from "@mui/material";
import {
  Add as AddIcon,
  Close as CloseIcon,
  Save as SaveIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Brightness4 as Brightness4Icon, //Maybe Not
  Brightness7 as Brightness7Icon, //Maybe Not
} from "@mui/icons-material";

const SlideUpTransition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TrainingDayCard = ({ date, exercises, onEdit, onDelete }) => {
  return (
    <Card
      elevation={0} //Play around with removing this line
      sx={{
        mb: 2,
        //p: 2,
        //boxShadow: 2,
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
          <IconButton
            onClick={() => onEdit(date)}
            size="large"
            color="primary"
            sx={{ zIndex: 1 }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => onDelete(date)}
            size="large"
            color="error"
            sx={{ zIndex: 1 }}
          >
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
            letterSpacing: "0.1em",
            textTransform: "uppercase",
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
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
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
