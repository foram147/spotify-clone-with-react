import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Player from "./Components/Player";
import SideBar from "./Components/SideBar";
import Home from "./Components/Home";
import Album from "./Components/Album";

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Route path="/" exact render={(props) => <Home {...props} />} />
        <Route
          path="/album/:id"
          exact
          render={(props) => <Album {...props} />}
        />

        <Player />
      </Router>
    </div>
  );
}

export default App;
