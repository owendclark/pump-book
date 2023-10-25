import { Card, CardContent, Typography } from "@mui/material";

const TrainingDayCard = ({ date, exercises }) => {
  return (
    <Card elevation={3} style={{ marginBottom: "16px" }}>
      <CardContent>
        <Typography variant="h6" color="primary">
          {date}
        </Typography>
        {exercises.map((exercise, index) => (
          <Typography key={index} variant="body2">
            {exercise}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default TrainingDayCard;
