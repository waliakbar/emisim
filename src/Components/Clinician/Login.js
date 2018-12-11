import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

const ClinicianLogin = () => {

    return(
        <div>
            <br>
            </br>
            <br></br>
<table width="300" border="1" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td align="center"><strong>xim chat</strong></td>
  </tr>
  <tr>
    <td><table width="100%" border="0" cellspacing="0" cellpadding="5">
      <tr>
        <td align="center"><p>
          <label for="username"></label>
          <input type="text" name="username" id="username" />
          <br />
        </p></td>
      </tr>
      <tr>
        <td align="center"><input type="password" name="password" id="password" /></td>
      </tr>
      <tr>
        <td><table width="80%" border="0" align="center" cellpadding="0" cellspacing="0">
          <tr>
            <td width="55%"><input type="checkbox" name="rememberMe" id="rememberMe" />
              <label for="rememberMe">Remember me</label></td>
            <td width="45%" align="right">
            
            <NavLink to="./ClinicianConsultation">
                <input type="submit" className="btn btn-success" name="Submit" id="Submit" value="Sign in" />               
            </NavLink>

            
            
            
            </td>
          </tr>
        </table></td>
      </tr>
      <tr>
        <td><a href="Fogotten Password">Fogotten Password</a></td>
      </tr>
    </table></td>
  </tr>
</table>
        </div>

    );
};

export default ClinicianLogin;