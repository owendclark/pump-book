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
        dark: "#005388",
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
      fontWeightBold: 700,
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
            borderRadius: "50px",
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
              transform: "scale(1.05)",
              boxShadow: `0 5px 12px ${
                mode === "dark" ? "rgba(0,0,0,0.24)" : "rgba(0, 0, 0, 0.16)"
              }`,
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            letterSpacing: "0.025em",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
          },
          h6: {
            fontSize: "1.1rem",
            lineHeight: 1.5,
            textTransform: "uppercase",
            fontWeight: 500,
          },
        },
      },
    },
  });
};

export const darkTheme = getDynamicTheme("dark");
export const lightTheme = getDynamicTheme("light");
