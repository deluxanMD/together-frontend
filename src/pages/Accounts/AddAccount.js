import React, { useState, useEffect } from "react";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  makeStyles,
  Card,
  Typography,
  Button,
} from "@material-ui/core";

import { useForm, Form } from "../../hooks/useForm";
import { COLORS } from "../../constants/colors";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "inline-block",
    padding: `${theme.spacing(2)}px ${theme.spacing(10)}px`,
    color: "#3c44b1",
    cursor: "pointer",
  },
}));

const initialValues = {
  id: 0,
  accountName: "",
  accountColor: "",
  accountIcon: "",
};

const AddAccount = () => {
  const { values, setValues, handleChange } = useForm(initialValues);

  const classes = useStyles();

  return (
    <Form>
      <Grid container alignItems="center">
        <Grid item xs={8}>
          <TextField
            variant="outlined"
            label="Account Name"
            name="accountName"
            value={values.accountName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={2}>
          <Card className={classes.box}>
            <Typography variant="subtitle2">Color</Typography>
          </Card>
        </Grid>
        <Grid item xs={2}>
          {/* <Card className={classes.box}>
            <Typography variant="subtitle2">Icon</Typography>
          </Card> */}
          <Button variant="contained" color="default">
            Create Account
          </Button>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary">
        Create Account
      </Button>
    </Form>
  );
};

export default AddAccount;
