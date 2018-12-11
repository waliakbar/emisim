import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {

    return(
        <div>

            <br></br>
            
            <table border="0" width="230px;" cellspacing="0" cellpadding="0" align="center">
                <tbody>
                <tr>
                <td align="center"> I am a ?</td>
                </tr>
                </tbody>
                </table>

            <br></br>
            <table width="230px;" border="0" align="center" cellpadding="0" cellspacing="0">            
            <tr>
                <td align="center">            
                        <NavLink to="./PatientLogin">
                            <button type="button" class="btn btn-primary btn-lg">Patient</button>
                        </NavLink></td>
                <td align="center">           
                        <NavLink to="./ClinicianLogin">
                            <button type="button" class="btn btn-primary btn-lg">Clinician</button>
                        </NavLink> </td>
            </tr>
            </table>
        </div>

    );

};

export default Home;