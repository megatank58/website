import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProjectDetails from "./components/ProjectDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects/:id">
              <ProjectDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
