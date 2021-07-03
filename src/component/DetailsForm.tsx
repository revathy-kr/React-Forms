/* tslint:disable */
import React, { useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { IData } from '../actions';
import { initialState } from '../reducers/getDataReducer';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const defaultData = {
  Name: "",
  Email: "",
  Country: "",
  DOB: undefined,
  About: "",
  Gender: "",
}
const DetailsForm = () => {
  const classes = useStyles();
  const [country, setCountry] = React.useState("");
  const [values, setValues] = React.useState<IData>(defaultData);

  const handleChange = useCallback((event) => {
    console.log("e", event, event.currentTarget.name, "values", event.target.value);
    setCountry(event.target.value);
    setValues({ ...values, [event.target.name]: event.target.value });
  }, [values]);

  const onSubmit = useCallback((event) => {
    event.preventDefault();
    alert("Succesfully Submitted");
    setValues(defaultData);
  }, [values]);

  const onCancel = useCallback((event) => {
    setValues(defaultData);
  }, [values]);

  return (
    <div className="detailsForm">
      <Grid container spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmit}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                id="outlined-name"
                label="Name"
                name="Name"
                variant="outlined"
                value={values && values["Name"]}
                onChange={handleChange}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                id="outlined-email"
                label="Email"
                name="Email"
                variant="outlined"
                value={values && values["Email"]}
                onChange={handleChange}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                id="outlined-email"
                label="Country"
                name="Country"
                variant="outlined"
                value={values && values["Country"]}
                onChange={handleChange}
              >
                {countries.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                id="outlined-dob"
                label="DOB"
                name="DOB"
                variant="outlined"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={values && values["DOB"]}
                onChange={handleChange}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                id="outlined-about"
                label="About"
                name="About"
                variant="outlined"
                multiline
                value={values && values["About"]}
                onChange={handleChange}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <FormControl component="fieldset" style={{ margin: "10px" }}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="Gender"
                  value={values && values["Gender"]}
                  onChange={handleChange}
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <div style={{ display: "flex", margin: 10, }}>
              <div style={{ margin: 10 }}>
                <Button variant="contained" color="primary" onClick={onCancel}>
                  Cancel
                </Button>
              </div>
              <div style={{ margin: 10 }}>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default DetailsForm;

export interface IDetailsFormProps {
  counter: number,
  increment: () => void,
  decrement: () => void,
  reset: () => void
}

const countries = [
  {
    value: '',
    label: 'Select',
  },
  {
    value: 'India',
    label: 'India',
  },
  {
    value: 'USA',
    label: 'USA',
  },
];

