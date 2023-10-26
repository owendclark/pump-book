import { Box, Switch, alpha } from "@mui/material";
import {
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from "@mui/icons-material";

const ThemeToggler = ({ isDarkMode, toggleDarkMode }) => (
  <Box
    sx={{
      position: "fixed",
      top: 16,
      right: 16,
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      gap: 1.5,
    }}
  >
    {isDarkMode ? (
      <Brightness7Icon sx={{ color: alpha("#007BFF", 0.7) }} />
    ) : (
      <Brightness4Icon sx={{ color: alpha("#00BFBB", 0.7) }} />
    )}
    <Switch checked={isDarkMode} onChange={toggleDarkMode} color="default" />
  </Box>
);

export default ThemeToggler;
