// import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Strain from "./pages/strain/Strain";
import Home from "./pages/home/Home";
import Taxonomy from "./pages/taxonomy/Taxonomy";
// import Domain from "./pages/taxonomy/Domain"

import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

// import './App.css'

function App() {
  return (
    <div className="App">

      {/* <button> tog </button> */}

      <Topbar />
      <Sidebar />

      <div>


        <Router>

          <Switch>
    
            {/* <Route path="/domain" component={Domain} /> */}
            <Route path="/tax" component={Taxonomy} />
            <Route path="/strain" component={Strain} />
            <Route path="/" component={Home} />
    
          </Switch>
        </Router>
      </div>

    </div>
  );
}

export default App;
