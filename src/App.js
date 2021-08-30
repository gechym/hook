import './App.css';
import React, {Component} from 'react'

class App extends Component {
  constructor(){
    super()
    
    this.state = {
      'isCollapsed' : true
    }
  }

  render(){
    return (
      <div className="App">
       Hello word
      </div>
    )
  }

}


export default App;
