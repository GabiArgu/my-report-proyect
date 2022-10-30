import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import Footer from './components/layout/Footer';

import LandingPages from "./components/LandingPage";
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Home from"./components/Home"
import Avisos from './components/posts/Avisos';
function App() {
  return (
    <Router>

    <Route exact path={"/"} component={LandingPages}/>
    
    <section>
      <Switch>
        <Route exact path={"/login"} component={Login}/>
        <Route exact path={"/register"} component={Register}/>
        <Route exact path={"/home"} component={Home}/>
        <Route exact path={"/avisos"} component={Avisos}/>
      </Switch>
    </section>
    <Footer/>
  </Router>
  );
}

export default App;
