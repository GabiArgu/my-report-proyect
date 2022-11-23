import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Componentes
import Footer from "./components/layout/Footer";
import LandingPages from "./components/LandingPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import HomeProfesores from "./components/HomeProfesores";
import HomeAdmin from "./components/HomeAdmin";
import HomeAlumnos from "./components/HomeAlumnos";
import CrudAlumnos from "./posts/CrudAlumnos";
//



//Importaciones de  REDUX 
import { Provider } from "react-redux";
import {store} from "../src/redux/store"

// import {ApiProvider} from "@reduxjs/toolkit/query/react"
// import {apiSlice} from "./api/apiSlice"
//

function App() {

  return (
    //api:instancia donde guardo consultas hechas desde componentes POST PUT 
    <Provider store={store}>
      <Router>
        <Route exact path={"/"} component={LandingPages} />

        <section>
          <Switch>
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/register"} component={Register} />
            <Route exact path={"/crudAlumnos"} component={CrudAlumnos} />
            <Route
              exact
              path={"/homeProfesores"}
              component={HomeProfesores}
            />
            <Route exact path={"/homeAdmin"} component={HomeAdmin} />
            <Route exact path={"/homeAlumnos"} component={HomeAlumnos} />
          </Switch>
        </section>
        <Footer />
      </Router>
    </Provider>
  );
}

//Exportacion del modulo
export default App;
