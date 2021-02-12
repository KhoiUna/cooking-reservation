import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import ReserveForm from "./containers/ReserveForm/ReserveForm";
import FeedbackForm from "./containers/FeedbackForm/FeedbackForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/reserve" component={ReserveForm} />
          <Route path="/feedback" component={FeedbackForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
