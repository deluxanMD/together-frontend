import React from "react";
import { Paper, makeStyles } from "@material-ui/core";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

import { PageHeader } from "../../components";
import AddAccount from "./AddAccount";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const Accounts = () => {
  const classes = useStyles();

  return (
    <>
      <PageHeader
        title="Add New Account"
        subtitle="Create a new account for managing your income and expenses"
        icon={<AccountBalanceWalletIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <AddAccount />
      </Paper>
    </>
  );
};

export default Accounts;
