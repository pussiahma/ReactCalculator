import * as NumButtonActionTypes from '../actiontypes/numbutton';

export const clearField = () => {
	return {
	  type: NumButtonActionTypes.CLEAR
	}
}

export const getNumber = (text) => {
	return{
      type: NumButtonActionTypes.GET_NUMBER,
      text,
	}
}

export const getMathButton = (text) => {
	return {
	  type: NumButtonActionTypes.GET_MATH_BUTTON,
	  text,
	}
}

export const getResult =(value) => {
	return {
	  type: NumButtonActionTypes.GET_RESULT,
	  value,
	}
}
