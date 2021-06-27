import React from "react";
import {
  makeStyles,
  InputLabel,
  Typography,
  FormControl,
  Input,
  FormHelperText,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "40px auto",
    width: 500,
  },
  helperText: {
    color: theme.palette.secondary.main,
  },
}));

const Auth = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2">Create new user</Typography>
      <form className={classes.appMain} noValidate autoComplete="off">
        <FormControl fullWidth>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input
            id="email"
            aria-describedby="email-helper-text"
            type="email"
            required
          />
          <FormHelperText id="email-helper-text" className={classes.helperText}>
            Please enter a valid email address
          </FormHelperText>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input
            id="username"
            aria-describedby="username-helper-text"
            required
          />
          <FormHelperText
            id="username-helper-text"
            className={classes.helperText}
          >
            Please enter a valid username
          </FormHelperText>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            aria-describedby="password-helper-text"
            type="password"
            required
          />
          <FormHelperText
            id="password-helper-text"
            className={classes.helperText}
          >
            Please enter a valid password
          </FormHelperText>
        </FormControl>
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </form>
    </div>
  );
};

export default Auth;
