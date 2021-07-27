import "./App.css";
import Header from "./components/Header/Header";
import Application from "./components/App/App";
import Footer from "./components/Footer/Footer";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        className={classes.paper}
      >
        <Header></Header>
        <Application></Application>
        <Footer></Footer>
      </Grid>
    </div>
  );
}

export default App;
