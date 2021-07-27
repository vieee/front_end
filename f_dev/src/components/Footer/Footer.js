import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import classes from "./Footer.module.css";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import InfoIcon from '@material-ui/icons/Info';
import PersonIcon from '@material-ui/icons/Person';

export class Footer extends Component {
  render() {
    return (
      <>
        <Grid item xs={12} justifyContent="flex-end">
          <Paper className={classes.papers}>
            <div className={classes.group}>
                <BusinessCenterIcon />
                <div>Home</div>
            </div>
            <div className={classes.group}>
                <AccountBalanceWalletIcon />
                <div>Recharge</div>
            </div>
            <div className={classes.group}>
                <AddCircleIcon />
                <div>Post Job</div>
            </div>
            <div className={classes.group}>
                <InfoIcon />
                <div>Info</div>
            </div>
            <div className={classes.group}>
                <PersonIcon />
                <div>Profile</div>
            </div>
          </Paper>
        </Grid>
      </>
    );
  }
}

export default Footer;
