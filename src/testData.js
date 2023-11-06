const testData = [
  {
    date: "2023-10-24",
    exercises: [
      {
        name: "Bench Press",
        weightType: "Barbell",
        sets: [
          { reps: "6", weight: "190", RPE: "7" },
          { reps: "5", weight: "190", RPE: "7" },
        ],
      },
      {
        name: "OH Rope Extension",
        weightType: "Barbell",
        sets: [
          { reps: "13", weight: "37.5lb", RPE: "7" },
          { reps: "12", weight: "40lb", RPE: "7" },
        ],
      },
    ],
  },
  {
    date: "2023-10-23",
    exercises: [
      {
        name: "Deadlift",
        weightType: "Barbell",
        sets: [
          { reps: "6", weight: "190", RPE: "7" },
          { reps: "5", weight: "190", RPE: "7" },
        ],
      },
      {
        name: "Curls",
        weightType: "Barbell",
        sets: [
          { reps: "13", weight: "37.5lb", RPE: "7" },
          { reps: "12", weight: "40lb", RPE: "7" },
        ],
      },
    ],
  },
  {
    date: "2023-10-25",
    exercises: [
      {
        name: "Push-ups",
        weightType: "Bodyweight",
        sets: [
          { reps: "25", weight: "0", RPE: "7" }, // Bodyweight
          { reps: "20", weight: "0", RPE: "7" },
        ],
      },
      {
        name: "Assisted Pull-ups",
        weightType: "Assisted",
        sets: [
          { reps: "10", weight: "-20lb", RPE: "7" }, // Assisted with negative weight
          { reps: "9", weight: "-25lb", RPE: "7" },
        ],
      },
    ],
  },
  {
    date: "2023-10-26",
    exercises: [
      {
        name: "Weighted Dips",
        weightType: "Weighted",
        sets: [
          { reps: "8", weight: "25lb", RPE: "7" }, // Extra weight added
          { reps: "7", weight: "30lb", RPE: "7" },
        ],
      },
      {
        name: "Dumbbell Rows",
        weightType: "Dumbbell",
        sets: [
          { reps: "10", weight: "50lb", RPE: "7" },
          { reps: "10", weight: "55lb", RPE: "7" },
        ],
      },
    ],
  },
  {
    date: "2023-10-27",
    exercises: [
      {
        name: "Leg Press",
        weightType: "Machine",
        sets: [
          { reps: "12", weight: "200lb", RPE: "7" },
          { reps: "10", weight: "220lb", RPE: "7" },
        ],
      },
      {
        name: "Cable Rows",
        weightType: "Cable",
        sets: [
          { reps: "12", weight: "50lb", RPE: "7" },
          { reps: "12", weight: "55lb", RPE: "7" },
        ],
      },
    ],
  },
  {
    date: "2023-10-28",
    exercises: [
      {
        name: "EZ Bar Curls",
        weightType: "EZ Bar",
        sets: [
          { reps: "10", weight: "40lb", RPE: "7" },
          { reps: "9", weight: "45lb", RPE: "7" },
        ],
      },
      {
        name: "Trap Bar Deadlift",
        weightType: "Trap Bar",
        sets: [
          { reps: "6", weight: "225lb", RPE: "7" },
          { reps: "5", weight: "240lb", RPE: "7" },
        ],
      },
    ],
  },
  // Edge Cases
  {
    date: "2023-10-29",
    exercises: [
      {
        name: "Edge Exercise", // Generic exercise name for edge cases
        weightType: "Machine",
        sets: [
          { reps: "0", weight: "0", RPE: "7" }, // Zero reps and weight
          { reps: "1", weight: "-1", RPE: "7" }, // 1 rep with negative weight
        ],
      },
    ],
  },
];

export default testData;
