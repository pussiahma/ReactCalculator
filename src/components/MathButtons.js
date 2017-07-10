import React, { Component } from 'react';
import PropTypes from 'prop-types';

function MathButtons(props) {
  return (
    <div className="col-xs-6">
    <button onClick={ () => props.getMathButton(props.name) }value={props.name}>{props.name}</button>
    </div>
  ); 
}
        
MathButtons.propTypes = {
  getMathButton: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,   
}

export default MathButtons;
