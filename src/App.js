import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "./styles/theme";
import Home from "./pages/Home";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Home
        isDarkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />
    </ThemeProvider>
  );
};

export default App;
