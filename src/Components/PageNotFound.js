import React from "react";

const PageNotFound = () => {

    return(
        <div>
<table width="600" border="1" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td align="center"><strong>xim chat</strong></td>
  </tr>
  <tr>
    <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td width="26%">[IMAGE]</td>
        <td width="74%"><table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td width="19%"><strong>Name</strong></td>
            <td width="81%"> John Smith</td>
          </tr>
          <tr>
            <td><strong>DOB</strong></td>
            <td>01/01/1980</td>
          </tr>
          <tr>
            <td><strong>Address</strong></td>
            <td>1 Leeds Road, Leeds LS196BA</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </table></td>
      </tr>
    </table></td>
  </tr>
  <tr>
    <td align="center"><p>&nbsp;</p>
      <p>Please provide a short description:</p>
    <p>
      <label for="textarea"></label>
      <textarea name="textarea" id="textarea" cols="45" rows="5"></textarea>
      </p>
    <p>
    <input type="submit" className="btn btn-success" name="Submit" id="Submit" value="submit" />
    </p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>
        <button type="button" class="btn btn-warning">End chat</button>
      <br />
    </p></td>
  </tr>
</table>
        </div>

    );

};

export default PageNotFound;