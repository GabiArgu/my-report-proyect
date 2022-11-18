import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import React, {useState, useEffect} from "react";
import { Session } from "./Contexts/Session";
import { StudentInfo } from "./Contexts/StudentInfo";
import Footer from './components/layout/Footer';
import LandingPages from "./components/LandingPage";
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Home from"./components/Home"
import Avisos from './components/posts/Avisos';
function App() {
  useEffect(() => {
    if(localStorage.getItem('rstoken')){
      setSession(localStorage.getItem('rstoken'))
    }
  }, [])

  //Almacena información de la sesión
  const [session, setSession] = useState(null);
  //Almacena información de un estudiante en particular.
  const [studentInfo, setStudentInfo] = useState(null)
  return (
    <Router>

    <Route exact path={"/"} component={LandingPages}/>
    
    <section>
    <Session.Provider value = {[session, setSession]}>
    <StudentInfo.Provider value = {[studentInfo, setStudentInfo]}>
      <Switch>
     
        <Route exact path={"/login"} component={Login}/>
        <Route exact path={"/register"} component={Register}/>
        <Route exact path={"/home"} component={Home}/>
        <Route exact path={"/avisos"} component={Avisos}/>
      </Switch>
      </StudentInfo.Provider>
    </Session.Provider>
    </section>
    <Footer/>
  </Router>
  );
}

export default App;
