import React, { Component } from 'react';
import PropTypes from 'prop-types';

function NumButton(props){
  return (
  	<div className="col-xs-4 numButton">
    <button onClick={ () => props.getNumber(props.name) } value={props.name}>{props.name}</button>
    </div>
  );
}

NumButton.propTypes = {
  name: PropTypes.string.isRequired,
  getNumber: PropTypes.func.isRequired,
}

export default NumButton;
