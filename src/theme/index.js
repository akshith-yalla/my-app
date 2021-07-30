import { makeStyles, responsiveFontSizes } from "@material-ui/core/styles";

import { grey, cyan, orange } from "@material-ui/core/colors";


const baseTheme = makeStyles({
  container: {
    primary: {
      borderRadius: '1rem',
      padding: '1rem',
    },
    secondary: {
      borderRadius: '1rem',
      padding: '1rem',
    },
  },
  palette: {
    type: "dark",
    primary: {
      main: cyan[200],
    },
    secondary: {
      main: orange[500],
    },
    containerPrimary: {
      main: cyan[200],
      light: "#b4ffff",
      dark: "#4bacb8",
    },
    containerSecondary: {
      main: grey[400],
      light: "#f5f5f5",
      dark: "#373737",
    },
  },
  typography: {
    fontSize: 12,
  },
});

const responsiveFontTheme = responsiveFontSizes(baseTheme);

export default responsiveFontTheme;
