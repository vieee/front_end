import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import classes from "./Header.module.css";
import Battery50Icon from "@material-ui/icons/Battery50";
import SignalWifi2BarIcon from "@material-ui/icons/SignalWifi2Bar";
import NetworkCellIcon from "@material-ui/icons/NetworkCell";

export class Header extends Component {
  render() {
    return (
      <div className={classes.papers}>
        <Grid item xs={12} className={classes.papers}>
          <Paper className={classes.papers}>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="baseline"
              className={classes.papers}
            >
              <SignalWifi2BarIcon style={{ color: "#EEE" }} />
              <NetworkCellIcon style={{ color: "#EEE" }} />
              <Battery50Icon style={{ color: "#EEE" }} />
            </Grid>
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default Header;
