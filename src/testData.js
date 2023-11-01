const testData = [
  {
    date: "2023-10-24",
    exercises: [
      {
        name: "Bench Press",
        weightType: "Barbell",
        sets: [
          { reps: "6", weight: "190" },
          { reps: "5", weight: "190" },
        ],
      },
      {
        name: "OH Rope Extension",
        weightType: "Barbell",
        sets: [
          { reps: "13", weight: "37.5lb" },
          { reps: "12", weight: "40lb" },
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
          { reps: "6", weight: "190" },
          { reps: "5", weight: "190" },
        ],
      },
      {
        name: "Curls",
        weightType: "Barbell",
        sets: [
          { reps: "13", weight: "37.5lb" },
          { reps: "12", weight: "40lb" },
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
          { reps: "25", weight: "0" }, // Bodyweight
          { reps: "20", weight: "0" },
        ],
      },
      {
        name: "Assisted Pull-ups",
        weightType: "Assisted",
        sets: [
          { reps: "10", weight: "-20lb" }, // Assisted with negative weight
          { reps: "9", weight: "-25lb" },
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
          { reps: "8", weight: "25lb" }, // Extra weight added
          { reps: "7", weight: "30lb" },
        ],
      },
      {
        name: "Dumbbell Rows",
        weightType: "Dumbbell",
        sets: [
          { reps: "10", weight: "50lb" },
          { reps: "10", weight: "55lb" },
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
          { reps: "12", weight: "200lb" },
          { reps: "10", weight: "220lb" },
        ],
      },
      {
        name: "Cable Rows",
        weightType: "Cable",
        sets: [
          { reps: "12", weight: "50lb" },
          { reps: "12", weight: "55lb" },
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
          { reps: "10", weight: "40lb" },
          { reps: "9", weight: "45lb" },
        ],
      },
      {
        name: "Trap Bar Deadlift",
        weightType: "Trap Bar",
        sets: [
          { reps: "6", weight: "225lb" },
          { reps: "5", weight: "240lb" },
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
          { reps: "0", weight: "0" }, // Zero reps and weight
          { reps: "1", weight: "-1" }, // 1 rep with negative weight
        ],
      },
    ],
  },
];

export default testData;
