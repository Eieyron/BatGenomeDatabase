import Topbar from "./components/topbar/Topbar";
import { Route, Router, Switch } from "react-router-dom";
import routes from "./Routes";
import history from "./history";
import CategoryList from "./components/taxonomy_handler/CategoryList";

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
