import React from "react";
import { Grid, Paper } from "@material-ui/core";
import classes from "./App.module.css";
import {
  createTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#0063cc",
    borderColor: "#0063cc",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createTheme({
  palette: {
    primary: green,
  },
});

function App() {
  //   const styles = useStyles();
  return (
    <div className={classes.paper}>
      <Grid item xs={12} className={classes.paper}>
        <Paper style={{ background: "#f1d8f7" }}>
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Paper
                style={{
                  background: "#FFF",
                  height: "15rem",
                  zIndex: "1999",
                  marginBottom: "1rem",
                }}
              >
                I
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper
                style={{
                  background: "#FFF",
                  height: "5rem",
                  zIndex: "1999",
                  marginBottom: "1rem",
                }}
              >
                <div className={classes.two}></div>
                <div className={classes.two}>
                  <ThemeProvider theme={theme}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.margin}
                    >
                      Theme Provider
                    </Button>
                  </ThemeProvider>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} style={{ background: "#FFF", height: "10rem" }}>
              <Paper style={{ background: "#FFF", height: "10rem" }}></Paper>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default App;
