import Topbar from "./components/topbar/Topbar";
import { Route, Router, Switch } from "react-router-dom";
import routes from "./Routes";
import history from "./history";

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
                  return (
                    <route.component
                      // Sidebar=<Sidebar c
                      Crumb={route.path}
                    />
                  );
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
