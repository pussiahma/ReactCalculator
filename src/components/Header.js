import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Header(props){
  return (
    <div className="header">
      <div className="inputField">
      	<input id ="field" type="text" value={props.number} readOnly></input>
      	<button id="clear" onClick={ () => props.clearField() }>C</button>
      </div>
    </div>
  );
}
 
Header.propTypes = {
  number: PropTypes.string.isRequired,
  clearField: PropTypes.func.isRequired,
}

export default Header;
