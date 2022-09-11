import { CssBaseline, ThemeProvider } from "@mui/material";
import { themeConf } from "../theme";

export const Apptheme = ({ children }) => {
  // se usa para envolver componentes
  return (
    <ThemeProvider theme={themeConf}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

//ejemplo {childrem}
{
  /*  <Apptheme>
         <RickyApp/>
      </Apptheme> */
}
