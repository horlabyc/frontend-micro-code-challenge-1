import React, {Component} from 'react';
import Button from './components/button';
import Toast from './components/toast';
import './css/index.css';
import Header from './components/homeHeader';
class App extends Component {
  state = {  
    toastDisplay: false
  };

  handleClick = val => {
    this.setState( { toastDisplay: true});
  }

  render() { 
    return ( 
      <div className = 'container-fluid'>
        <Header 
          onclick = { this.handleClick }
        />        
        <Toast 
          displayToast = { this.state.toastDisplay }
        />
      </div>
     );
  }
}
 
export default App;
