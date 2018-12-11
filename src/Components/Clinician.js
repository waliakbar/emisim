import React from "react";
import { NavLink } from "react-router-dom";

const Clinician = () => {

    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">            
            <div class="collapse navbar-collapse" id="navbarToggler">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Triage list <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Consultation</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Clinical record</a>
                </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search"></input>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

        <nav class="navbar fixed-bottom navbar-dark bg-dark">
        <a class="navbar-brand" href="#">xim copy right 2018</a>
        </nav>
        
        </div>

    );

};

export default Clinician;