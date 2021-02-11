import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./FeedbackForm.css";
import {
  Container,
  Paper,
  Grid,
  TextareaAutosize,
  TextField,
  Button,
} from "@material-ui/core";

export default function FeedbackForm() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <Header />

      <form>
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
              <h3 className="notice">
                * This part is for complaint & feedback
              </h3>

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
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClick}
                  className="submit-button"
                >
                  SUBMIT
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </form>

      <Footer />
    </>
  );
}
