import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const themeConf = createTheme({
  palette: {
    primary: {
      main: "#B7E4F9FF",
    },
    secondary: {
      main: "#69C8ECFF",
    },
    error: {
      main: red.A200,
    },
  },
});
