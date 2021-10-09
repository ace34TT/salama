import React from 'react';
import './App.css';
import Frontoffice from './components/frontoffice/Frontoffice';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Admin from './components/backoffice/admin/Admin';
import AdnLogin from "./components/backoffice/admin/Login"
import DrLogin from "./components/backoffice/doctor/Login"
import Doctor from './components/backoffice/doctor/Doctor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Frontoffice} />
          <Route path="/admin/login" component={AdnLogin} />
          <Route path="/admin/dashboard" component={Admin} />
          <Route path="/admin/doctor" component={Admin} />
          <Route path="/doctor/login" component={DrLogin} />
          <Route path="/doctor/dashboard" component={Doctor} />
          <Route path="/doctor/notification" component={Doctor} />
        </Switch>
      </BrowserRouter>
    </div >
  );
}
export default App;
