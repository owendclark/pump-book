import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#007BFF",
      light: "#00BFBB",
    },
    secondary: {
      main: "#FFFFFF",
    },
    background: {
      default: "#111111",
      paper: "#1E1E1E",
    },
    error: {
      main: "#FF9A33",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif", // Using a modern, geometric typeface
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // Rounded corners for buttons
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out", // Smooth transition for cards
          "&:hover": {
            transform: "scale(1.03)", // Slight scale on hover for a dynamic feel
          },
        },
      },
    },
  },
});

export default theme;
