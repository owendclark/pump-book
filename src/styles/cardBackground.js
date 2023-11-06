import { styled } from "@mui/material/styles";

const CardBackground = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage:
    "linear-gradient(120deg, transparent 0%, transparent 65%, #007BFF 65%)",
  transform: "skewX(-20deg)",
  transformOrigin: "bottom left",
  opacity: 0.08,
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "skewX(-25deg) scale(1.02)",
  },
}));

export default CardBackground;
