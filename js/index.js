"use strict";

var NUMBERS = [{
  id: 1,
  name: "1"
}, {
  id: 2,
  name: "2"
}, {
  id: 3,
  name: "3"
}, {
  id: 4,
  name: "4"
}, {
  id: 5,
  name: "5"
}, {
  id: 6,
  name: "6"
}, {
  id: 7,
  name: "7"
}, {
  id: 8,
  name: "8"
}, {
  id: 9,
  name: "9"
}, {
  id: 10,
  name: "0"
}];

function Header(props) {

  return React.createElement(
    "div",
    { className: "header" },
    React.createElement(
      "div",
      { className: "inputField" },
      React.createElement("input", { type: "text", value: props.number, readOnly: true }),
      React.createElement(
        "button",
        { id: "clear", onClick: props.clear },
        "C"
      )
    )
  );
}

Header.propTypes = {
  number: React.PropTypes.string.isRequired,
  clear: React.PropTypes.func.isRequired
};

function Button(props) {

  return React.createElement(
    "div",
    { className: "col-xs-4 numButton" },
    React.createElement(
      "button",
      { onClick: props.getNum, value: props.name },
      props.name
    )
  );
}

Button.propTypes = {
  name: React.PropTypes.string.isRequired,
  getNum: React.PropTypes.func.isRequired
};

function MathButtons(props) {

  return React.createElement(
    "div",
    { className: "mathButtons" },
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col-xs-6" },
        React.createElement(
          "button",
          { onClick: props.onAdd },
          "+"
        )
      ),
      React.createElement(
        "div",
        { className: "col-xs-6" },
        React.createElement(
          "button",
          { onClick: props.onSubstract },
          "-"
        )
      ),
      React.createElement(
        "div",
        { className: "col-xs-6" },
        React.createElement(
          "button",
          { onClick: props.onDivide },
          "/"
        )
      ),
      React.createElement(
        "div",
        { className: "col-xs-6" },
        React.createElement(
          "button",
          { onClick: props.onMultiply },
          "*"
        )
      ),
      React.createElement(
        "div",
        { className: "col-xs-6" },
        React.createElement(
          "button",
          { onClick: props.onDecimal },
          "."
        )
      )
    ),
    React.createElement(
      "div",
      { className: "result" },
      React.createElement(
        "button",
        { id: "resultButton", onClick: props.onResult },
        "="
      )
    )
  );
}

MathButtons.propTypes = {
  onAdd: React.PropTypes.func.isRequired,
  onSubstract: React.PropTypes.func.isRequired,
  onDivide: React.PropTypes.func.isRequired,
  onMultiply: React.PropTypes.func.isRequired,
  onDecimal: React.PropTypes.func.isRequired,
  onResult: React.PropTypes.func.isRequired
};

var App = React.createClass({
  displayName: "App",

  propTypes: {
    number: React.PropTypes.string.isRequired,
    num: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      id: React.PropTypes.number.isRequired
    })).isRequired

  },

  getDefaultProps: function getDefaultProps() {
    return {
      number: ""
    };
  },

  getInitialState: function getInitialState() {
    return {
      numberArr: this.props.num,
      number: this.props.number

    };
  },

  getNumber: function getNumber(index) {

    if (this.state.numberArr[index].name == "0" && this.state.number == "") {
      this.state.number = "";
    } else {
      this.state.number += this.state.numberArr[index].name;
      this.setState(this.state);
    }
  },

  clearField: function clearField() {
    this.state.number = "";
    this.setState(this.state);
  },

  onAdd: function onAdd() {
    var lastChar = this.state.number.substr(this.state.number.length - 1);
    if (this.state.number != "" && lastChar != "/" && lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != ".") {
      this.state.number += " + ";
      this.setState(this.state);
    }
  },
  onSubstract: function onSubstract() {
    var lastChar = this.state.number.substr(this.state.number.length - 1);
    if (lastChar != "/" && lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != ".") {
      this.state.number += " -";
      this.setState(this.state);
    }
  },
  onDivide: function onDivide() {
    var lastChar = this.state.number.substr(this.state.number.length - 1);
    if (this.state.number != "" && lastChar != "/" && lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != ".") {
      this.state.number += " / ";
      this.setState(this.state);
    }
  },
  onMultiply: function onMultiply() {
    var lastChar = this.state.number.substr(this.state.number.length - 1);
    if (this.state.number != "" && lastChar != "/" && lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != ".") {
      this.state.number += " * ";
      this.setState(this.state);
    }
  },

  onDecimal: function onDecimal() {
    var lastChar = this.state.number.substr(this.state.number.length - 1);
    if (lastChar != "/" && lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != ".") {
      this.state.number += ".";
      this.setState(this.state);
    }
  },

  onResult: function onResult() {
    var lastChar = this.state.number.substr(this.state.number.length - 1);
    if (lastChar == "+" || lastChar == "/" || lastChar == "-" || lastChar == "*") {
      this.state.number = this.state.number.substring(0, this.state.number.length - 1);
      console.log(this.state.number);
      lastChar = this.state.number.substr(this.state.number.length - 1);
    }
    if (this.state.number != "") {
      this.state.number = eval(this.state.number).toFixed(4).toString();
      if (this.state.number % 1 == 0) {
        this.state.number = Math.round(this.state.number).toString();
      }
      this.setState(this.state);
    }
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: "app" },
      React.createElement(Header, { number: this.state.number, clear: this.clearField }),
      React.createElement(
        "div",
        { className: "numberField" },
        React.createElement(
          "div",
          { className: "row" },
          this.state.numberArr.map(function (button, index) {
            return React.createElement(Button, { getNum: function () {
                this.getNumber(index);
              }.bind(this),
              name: button.name, key: button.id
            });
          }.bind(this))
        )
      ),
      React.createElement(MathButtons, { onAdd: this.onAdd, onSubstract: this.onSubstract, onDivide: this.onDivide, onMultiply: this.onMultiply, onDecimal: this.onDecimal, onResult: this.onResult })
    );
  }

});

ReactDOM.render(React.createElement(App, { num: NUMBERS }), document.getElementById("container"));