import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { create, all} from 'mathjs';
const math = create(all, {});

class Calc extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: 1,
      answer: 0
    };
    this.handleClick = this.handleClick.bind(this)
  };

handleClick(event){
  console.log(event.target.value)
  const currValue = this.state.value;
  const newValue = currValue + event.target.value
  this.setState({value: newValue})
}  
render(){
   const buttons = [['zero', 0],
                     ['one', 1],
                     ['two', 2],
                     ['three', 3],
                     ['four', 4],
                     ['five', 5],
                     ['six', 6],
                     ['seven', 7],
                     ['eight', 8],
                     ['nine', 9],
                     ['add', '+'],
                     ['subtract', '-'],
                     ['multiply', '*'],
                     ['divide', '/'],
                     ['decimal', '.']
                      ]
     const buttonList = buttons.map(
              ([key,value],index) =>
                 <button key={index} id={key} value={value} onClick={this.handleClick}>
                  {value}
                   </button>
		)
   return(
     <body>
     Hello World! <br/>
       {this.state.value}
       <br/>
   	{this.state.answer}
      <br/>
       <button value="A" onClick={()=>this.setState({answer: math.evaluate(this.state.value), value: ''})}>Equals</button>
	<div id="card">
	{buttonList}
	</div>
	
      </body>
       );
  }
}

ReactDOM.render(<Calc />, document.getElementById('root'));
