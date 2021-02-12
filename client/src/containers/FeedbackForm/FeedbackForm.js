import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Popup from "../../components/Popup/Popup";
import "./FeedbackForm.css";
import { useState } from "react";
import {
  Container,
  Paper,
  Grid,
  TextareaAutosize,
  TextField,
  Button,
} from "@material-ui/core";

export default function FeedbackForm() {
  const [data, setData] = useState({
    subject: "",
    feedback: "",
  });
  const handleChange = ({ target }) => {
    let { name, value } = target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [popUp, setPopUp] = useState(false);

  const handleClick = async () => {
    const result = await fetch("http://localhost:5000/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
    if ((await result.ok) === true) {
      setPopUp(true);
    }
  };

  return (
    <>
      <Header />

      <form onChange={handleChange} onSubmit={(e) => e.preventDefault()}>
        <Container>
          <Paper elevation={10}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <h2 style={{ paddingTop: "3%" }}>FEEDBACK</h2>
              <h3 className="notice">* This part is for complaints</h3>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="subject"
                  name="subject"
                  label="Subject"
                  fullWidth
                  autoComplete="off"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextareaAutosize
                  rowsMax={5}
                  rowsMin={5}
                  aria-label="Feedback"
                  placeholder="Type your feedback"
                  name="feedback"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                {data.subject && data.feedback ? (
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

      {popUp && <Popup fromForm="feedback" />}

      <Footer />
    </>
  );
}