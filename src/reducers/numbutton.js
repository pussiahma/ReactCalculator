import * as NumButtonActionTypes from '../actiontypes/numbutton';

const initialState =  {
  number: "",
  numberArr: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ],
  mathButtonArr: [" + ", " -", " / ", " * ", "."],
}

export default function NumButtonReducer(state = initialState, action) {
  console.log(state)

  switch (action.type) {
    case NumButtonActionTypes.GET_NUMBER:

      if (state.number === '-0' || state.number === '.0' || state.number === '0' || state.number.endsWith('-0') || state.number.endsWith('/ 0') 
        || state.number.endsWith('+ 0') || state.number.endsWith('* 0')) {
         return {
          ...state
         }
      }

      return {
        ...state,
        number: state.number == '' ? action.text : state.number + action.text,
      }

    case NumButtonActionTypes.GET_MATH_BUTTON: {

      const last = state.number.substr(state.number.length - 1)
      const end = state.number.substr(state.number.length - 3)

    if(action.text === '.') {
      if(state.number.includes('.') && !end.includes(' ') || end.includes('.')) {
            return {
            ...state
          }
        }

      }

      if (action.text === ' -' || action.text === '.') {
        if (last === '.' || last === '-') {
          return {
            ...state
          }
        }
    
        return {
          ...state,
          number: state.number + action.text,
        }
      }

      if (last === "." || last === "-" || end === " / " || end === " * " || end === " + ") {
        return {
          ...state,
          number: state.number,
        }
      }

      return {
        ...state,
        number: state.number === "" ? "" : state.number + action.text,
      }
    }

    case NumButtonActionTypes.GET_RESULT: {

      const lastChar = action.value.substr(action.value.length - 1);
      const endChar = action.value.substr(action.value.length - 3);
      
        if (endChar === " + " || endChar === " / " || endChar === " * ") {
          return {
            ...state,
            number: eval(action.value.substring(0, action.value.length - 3)).toString(),
          }
        }

        if (lastChar === "." || lastChar === "-") {
         
          return {
            ...state,
            number: eval(action.value.substring(0, action.value.length - 1)).toString(),
          }
        }

        if (eval(action.value) % 1 === 0) {
          return {
            ...state,
            number: eval(action.value).toString(),
          }
        }

        if (eval(action.value).toString().includes(".") && eval(action.value).toFixed(4).toString().endsWith("00")) {
          return {
            ...state,
            number: eval(action.value).toFixed(2).toString(),
          }
        } 

          return {
            ...state,
            number: eval(action.value).toFixed(4).toString(),
          }
    }

    case NumButtonActionTypes.CLEAR:
      return {
        ...state,
        number: '',
      }

    default: 
    return state;
  }
}
