import { Route, Switch, Redirect } from "react-router-dom";
// import Content from "./Components/Content";
import LandingPage from "./Components/LandingPage";
import AboutPage from "./Components/AboutPage";
// import Navbar from "./Components/navbar";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" exact>
        <LandingPage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
    </Switch>
  );
}

export default App;
