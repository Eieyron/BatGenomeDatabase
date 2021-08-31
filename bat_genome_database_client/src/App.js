// import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Strain from "./pages/strain/Strain";
import Home from "./pages/home/Home";
import Taxonomy from "./pages/taxonomy/Taxonomy";
// import Domain from "./pages/taxonomy/Domain"

import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./pages/about/About";
import Login from "./pages/login/Login";

// import './App.css'

function App() {
  return (
    <div className="App">

      <Router>

        <Topbar />
        <Sidebar />

        <Switch>
  
          {/* <Route path="/domain" component={Domain} /> */}
          <Route path="/taxonomy" component={Taxonomy} />
          <Route path="/about" component={About} />
          <Route path="/strain" component={Strain} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
  
        </Switch>
      </Router>
    </div>

  );
}

export default App;
