import React, { forwardRef } from "react";
import { Slide } from "@mui/material";

const SlideUpTransition = forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

export default SlideUpTransition;
