import { createTheme } from "@mui/material";

const light = {
  backgroundMain: "#ECECEC",
  backgroundPaper: "#FFFFFF",
  text: "#333333",
  mutedText: "#888888",
};

const dark = {
  backgroundMain: "#111111",
  backgroundPaper: "#1E1E1E",
  text: "#ECECEC",
  mutedText: "#BBBBBB",
};

const getDynamicTheme = (mode) => {
  const currentPalette = mode === "dark" ? dark : light;

  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#007BFF",
        light: "#00BFBB",
        contrastText: currentPalette.text,
      },
      secondary: {
        main: "#FFFFFF",
        contrastText: currentPalette.text,
      },
      background: {
        default: currentPalette.backgroundMain,
        paper: currentPalette.backgroundPaper,
      },
      error: {
        main: "#FF4D4F",
        contrastText: currentPalette.text,
      },
    },
    typography: {
      fontFamily: "'Poppins', sans-serif",
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700, //Decide on either 700 or 600
      h1: {
        fontSize: "2rem",
        fontWeight: 700,
      },
      h2: {
        fontSize: "1.75rem",
        fontWeight: 600,
      },
      h3: {
        fontSize: "1.5rem",
        fontWeight: 600,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "50px", //50px is pill shaped, change to 8px if we just want rounded buttons
            textTransform: "none",
            padding: "12px 24px",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            transition:
              "transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
            borderRadius: "16px",
            boxShadow: `0 3px 6px ${
              mode === "dark" ? "rgba(0,0,0,0.16)" : "rgba(0, 0, 0, 0.08)"
            }`,
            "&:hover": {
              transform: "scale(1.05)", // Change to 1.03 if we want to tune it down
              boxShadow: `0 5px 12px ${
                mode === "dark" ? "rgba(0,0,0,0.24)" : "rgba(0, 0, 0, 0.16)"
              }`,
            },
          },
        },
      },
    },
  });
};

export const darkTheme = getDynamicTheme("dark");
export const lightTheme = getDynamicTheme("light");

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

//export default theme;
