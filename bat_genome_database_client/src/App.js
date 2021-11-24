import Topbar from "./components/topbar/Topbar";
import { Route, Router, Switch } from "react-router-dom";
import routes from "./Routes";
import history from "./history";
import axios from "axios";
import CategoryList from "./components/taxonomy_handler/CategoryList";

if (localStorage.logged_in === undefined) {
  localStorage.logged_in = false;
}

axios.defaults.baseURL = "http://0.0.0.0:8000/";
// axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.access;

// window.onScroll = (e) => console.log("scrolled!");

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Topbar />

        <Switch>
          {routes.map((route, route_id) => {
            return (
              <Route
                key={route_id}
                path={route.path}
                render={() => {
                  if (route.component === CategoryList) {
                    return (
                      <route.component
                        // Sidebar=<Sidebar c
                        Category={
                          (route.name = route.name
                            .charAt(0)
                            .toUpperCase()
                            .concat(route.name.slice(1)))
                        }
                        Crumb={route.path}
                      />
                    );
                  } else {
                    return (
                      <route.component
                        // Sidebar=<Sidebar c
                        Crumb={route.path}
                      />
                    );
                  }
                }}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
