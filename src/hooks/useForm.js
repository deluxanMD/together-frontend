import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    setValues,
    handleChange,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "90%",
      marginBottom: theme.spacing(1.5),
    },
  },
}));

export const Form = (props) => {
  const classes = useStyles();

  return <form className={classes.root}>{props.children}</form>;
};
