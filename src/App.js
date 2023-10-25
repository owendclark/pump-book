import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import Home from "./pages/Home";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
