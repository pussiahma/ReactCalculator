var NUMBERS = [
  {
    id: 1,
    name: "1",
  }, 
  {  
    id: 2,
    name: "2",
     }, 
  {  
    id: 3,
    name: "3",
  },
  {
      id: 4,
    name: "4",
  }, 
  {
      id: 5,
    name: "5",
  }, 
  {
      id: 6,
    name: "6",
  }, 
  {
      id: 7,
    name: "7",
  },
  {
      id: 8,
    name: "8",
  },
  {
      id: 9,
    name: "9",
  }, 
  {
     id: 10,
    name: "0", 
  }
  
];


function Header(props) {

  return(
   <div className="header">

      <div className="inputField">
      <input type="text" value={props.number} readOnly></input>
      <button id="clear" onClick={props.clear}>C</button>
       </div>
      </div>
  );
}

Header.propTypes = {
 number: React.PropTypes.string.isRequired,
  clear: React.PropTypes.func.isRequired,
}

 function Button(props){
  
  return(
  <div className="col-xs-4 numButton">
      <button onClick={props.getNum} value={props.name}>{props.name}</button>
      
        </div>
  );
   
 }

   Button.propTypes = {
  name: React.PropTypes.string.isRequired,
  getNum: React.PropTypes.func.isRequired,
}
   

function MathButtons(props){
  
    return(
 
        <div className="mathButtons">
        <div className="row">
    
        <div className="col-xs-6">
        <button onClick={props.onAdd}>+</button>
        </div>
        
        <div className="col-xs-6">
        <button onClick={props.onSubstract}>-</button>
        </div>
        
        <div className="col-xs-6">
          <button onClick={props.onDivide}>/</button>
        </div>
          
        
        <div className="col-xs-6">
        <button onClick={props.onMultiply}>*</button>
        </div>
        
            <div className="col-xs-6">
        <button onClick={props.onDecimal}>.</button>
        </div>
   
              </div>
  
        <div className="result">
          <button id ="resultButton" onClick={props.onResult}>=</button>
        </div>
        
        </div>
  );
  
}
        
  
   MathButtons.propTypes = {
     onAdd:React.PropTypes.func.isRequired,
     onSubstract:React.PropTypes.func.isRequired,
     onDivide:React.PropTypes.func.isRequired,
     onMultiply:React.PropTypes.func.isRequired,
     onDecimal: React.PropTypes.func.isRequired,
     onResult:React.PropTypes.func.isRequired,
}
   

var App = React.createClass({
  propTypes: {
    number: React.PropTypes.string.isRequired,
 num: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
   id: React.PropTypes.number.isRequired,
  })).isRequired, 
    
    
  },
    

  
   getDefaultProps: function() {
   return {
    number: "",
   }
  },
  
  getInitialState: function() {
  return {
  numberArr: this.props.num,
  number: this.props.number,
  
  }
 
  },
  
     getNumber: function(index) {

    if(this.state.numberArr[index].name == "0" && this.state.number =="") {
      this.state.number ="";
    }else{
       this.state.number += this.state.numberArr[index].name;
       this.setState(this.state);
    }
  },

  clearField: function() {
    this.state.number = "";
    this.setState(this.state);
    
  },

  onAdd: function() {
    var lastChar = this.state.number.substr(this.state.number.length - 1);
   if(this.state.number != "" && lastChar != "/" && lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != "."){
    this.state.number += " + ";
    this.setState(this.state);
    }
  },
    onSubstract: function() {
         var lastChar = this.state.number.substr(this.state.number.length - 1);
     if(lastChar != "/" && lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != ".")
     {
          this.state.number += " -";
    this.setState(this.state);
     }
  },
    onDivide: function() {
         var lastChar = this.state.number.substr(this.state.number.length - 1);
    if(this.state.number != "" && lastChar != "/" && lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != "."){
          this.state.number += " / ";
    this.setState(this.state);
     }
  },
    onMultiply: function() {
         var lastChar = this.state.number.substr(this.state.number.length - 1);
    if(this.state.number != "" && lastChar != "/" && lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != "."){
          this.state.number += " * ";
    this.setState(this.state);
     }
  },
  
  onDecimal: function() {
        var lastChar = this.state.number.substr(this.state.number.length - 1);
    if(lastChar != "/" && lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != "."){
          this.state.number += ".";
    this.setState(this.state);
     }
    
  },
  
    onResult: function() {
      var lastChar = this.state.number.substr(this.state.number.length - 1);
      if(lastChar == "+" || lastChar == "/" || lastChar=="-" || lastChar == "*") {
        this.state.number = this.state.number.substring(0, this.state.number.length - 1);
            console.log(this.state.number);
        lastChar= this.state.number.substr(this.state.number.length - 1);
       
          
      }
      if(this.state.number != "") {
      this.state.number =  eval(this.state.number).toFixed(4).toString();
      if(this.state.number % 1 == 0) {
       this.state.number = Math.round(this.state.number).toString();
      }
      this.setState(this.state);
      }
   
  
  },
  
  render: function() {
    return(
      <div className="app">
   <Header number={this.state.number} clear={this.clearField}/> 
        <div className="numberField">
         <div className="row">
           {this.state.numberArr.map(function(button, index) {
             return (
             <Button getNum={function() {this.getNumber(index)}.bind(this)}
               name={button.name} key={button.id} 
               />
  );
              
          }.bind(this))}
           </div>
          </div>
         
   <MathButtons onAdd={this.onAdd} onSubstract={this.onSubstract} onDivide= {this.onDivide} onMultiply={this.onMultiply} onDecimal = {this.onDecimal} onResult={this.onResult}/>
          

      </div>
    );
   
  }
  
  
  
});



ReactDOM.render(
  <App num={NUMBERS}/>, 
  document.getElementById("container")
);