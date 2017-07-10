import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ButtonActionCreators from '../actions/numbutton';
import NumButton from '../components/NumButton';
import Header from '../components/Header';
import MathButtons from '../components/MathButtons';

class Calculator extends React.Component {


  render() {
    const { dispatch, number, numberArr, mathButtonArr } = this.props;
    const getNumber = bindActionCreators(ButtonActionCreators.getNumber, dispatch);
    const getMathButton = bindActionCreators(ButtonActionCreators.getMathButton, dispatch);
    const clearField = bindActionCreators(ButtonActionCreators.clearField, dispatch);
    const getResult = bindActionCreators(ButtonActionCreators.getResult, dispatch);
    const numButtons = numberArr.map((button, key) => {
      return (
        <NumButton
          name={button} 
          key={key}
          getNumber={getNumber}
        />
      );           
    });

    const mathButtons = mathButtonArr.map(function(button,key){
      return (
        <MathButtons
          name={button}
          key={key}
          getMathButton={getMathButton}
        />
      );
    });

    return(
      <div className="app">
        <Header number={number} clearField={clearField}/> 
        <div className="numberField">
          <div className="row">
            {numButtons}
          </div>
        </div>  
        <div className="mathButtons">
          <div className="row">
            {mathButtons}
          </div>
        </div>
        <div className="result">
          <button id ="resultButton" onClick={ () => getResult(number) }>=</button>
        </div>
      </div>
    ); 
  }
}

const mapStateToProps = state => (
  {
    number: state.number,
    numberArr: state.numberArr,
    mathButtonArr: state.mathButtonArr,
  }
);

export default connect(mapStateToProps)(Calculator);
