import TrainingDayCard from "../components/TrainingDayCard";
import AddTrainingDayButton from "../components/AddTrainingDayButton";

import { Container, Typography, Box } from '@mui/material';

const Home = () => {
    const trainingDays = [
        { date: '2023-10-24', exercises: ['Squat: 5x5', 'Bench: 3x8'] },
        { date: '2023-10-23', exercises: ['Deadlift: 3x4', 'Pull-ups: 3x10'] }
    ];

  return (
    <Container maxWidth="sm">
        <Box my={4} textAlign="center">
            <Typography variant="h4" color="primary" gutterBottom>
                Pump Book
            </Typography>
            <AddTrainingDayButton onClick={() => console.log("Add New Training Day")} />
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
