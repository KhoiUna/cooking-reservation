import Grid from "@material-ui/core/Grid";
import "./ReserveForm.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Popup from "../../components/Popup/Popup";
import { makeStyles } from "@material-ui/core/styles";
import FormatTime from "../../helpers/FormatTime";
import {
  Container,
  Paper,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ReserveForm() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState(new Date(Date.now()));
  const handleDateChange = (date) => {
    setSelectedDate(new Date(date));
  };

  const [timeSlot, setTimeSlot] = useState("");
  const handleTimeSlotChange = ({ target }) => {
    setTimeSlot(target.value);
  };

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    numberOfPeople: "",
  });
  const handleChange = ({ target }) => {
    let { name, value } = target;
    value = name === "numberOfPeople" ? value * 1 : value;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [popUp, setPopUp] = useState(false);
  const [warn, setWarn] = useState("");

  const dataObj = { ...data, selectedDate, timeSlot };
  const handleClick = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/reserve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(dataObj),
      });

      if ((await res.ok) === true) {
        setPopUp(true);
      } else {
        setWarn(await res.text());
      }
    } catch (e) {
      console.error("Error sending data...");
      console.error(e);
    }
  };

  const { firstName, lastName, numberOfPeople } = dataObj;

  return (
    <>
      <Header />

      <form onChange={handleChange} onSubmit={(e) => e.preventDefault()}>
        <Container className="form-container">
          <Paper elevation={10}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <h2 className="reserve-notice">PLEASE FILL IN ALL FIELDS</h2>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="off"
                  value={data.firstName}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="off"
                  value={data.lastName}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="number-of-people"
                  name="numberOfPeople"
                  label="Number of people"
                  fullWidth
                  autoComplete="off"
                  type="number"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  required
                >
                  <InputLabel id="time-slot-label">Time slot</InputLabel>
                  <Select
                    labelId="time-slot-label"
                    id="demo-simple-select-outlined"
                    value={timeSlot}
                    onChange={handleTimeSlotChange}
                    label="Time slot"
                    className={classes.selectEmpty}
                  >
                    {[...Array(24).keys()].map((time, index) => (
                      <MenuItem value={time + 1} key={index}>
                        {FormatTime.timeSlot(time)}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {warn && (
                <Grid item xs={12} sm={6}>
                  <p style={{ fontWeight: "bold", color: "red" }}>
                    <i>{warn}</i>
                  </p>
                </Grid>
              )}

              <Grid item xs={12} sm={6}>
                {firstName &&
                lastName &&
                numberOfPeople > 0 &&
                numberOfPeople <= 8 &&
                new Date(dataObj.selectedDate.toLocaleDateString()) >=
                  new Date(new Date().toLocaleDateString()) &&
                dataObj.timeSlot ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                    className="submit-button"
                    type="submit"
                  >
                    SUBMIT
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    className="submit-button"
                    disabled
                  >
                    SUBMIT
                  </Button>
                )}
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </form>

      {popUp && <Popup fromForm="reserve" firstName={firstName} />}

      <Footer />
    </>
  );
}
