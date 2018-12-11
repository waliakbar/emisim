import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./Components/Home";
import Patient from "./Components/Patient";
import Clinician from "./Components/Clinician";
import PageNotFound from "./Components/PageNotFound";

import PatientLogin from "./Components/Patient/PatientLogin"
import PatientPreTriage from "./Components/Patient/PreTriage"
import PatientConsultation from "./Components/Patient/Consultation"

import ClinicianLogin from "./Components/Clinician/Login"
import ClinicianTriageList from "./Components/Clinician/TriageList"
import ClinicianConsultation from "./Components/Clinician/Consultation"

import ClinicianMedicalHistory from "./Components/Clinician/MedicalHistory"

class Application extends Component {
  constructor() {
    super();
    this.state = { applicationContext: this.getContext() }
  }
  
  getContext() {    
    return 'This is overall context that will get passed to all other compenents';
  }

  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Home" component={Home} exact />

            {/* <Route path="/PatientLogin" component={PatientLogin} props={this.state.data} exact /> */}
            
            <Route path='/PatientLogin' render={() => (<PatientLogin stateData={this.state.applicationContext} />)} />            
            <Route path="/PatientPreTriage" component={PatientPreTriage} exact />
            <Route path="/PatientConsultation" component={PatientConsultation} exact />
            <Route path="/ClinicianLogin" component={ClinicianLogin} exact />
            <Route path="/ClinicianTriageList" component={ClinicianTriageList} exact />
            <Route path="/ClinicianConsultation" component={ClinicianConsultation} exact />                 
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>        
    );
  }
}

export default Application;