import React, {Component} from 'react';
import Button from './components/button';
import Toast from './components/toast';
import './css/index.css';
import Header from './components/homeHeader';
import { getInfluencers } from './services/influencerService';
class App extends Component {
  state = {  
    toastDisplay: false,
    influencers: getInfluencers(),
    currentInfluencer: 0
  };

  displayToast = val => {
    this.setState( { toastDisplay: true, currentInfluencer: this.getInfluencerToDisplay()});
  }

  getInfluencerToDisplay = () => {
    const inflencersCount = this.state.influencers.length; 
    return Math.floor(Math.random() * inflencersCount);
  }


  render() { 
    const { toastDisplay, influencers, currentInfluencer } = this.state;
    return ( 
      <div className = 'container-fluid'>
        <Header 
          onclick = { this.displayToast }
        />        
        <Toast 
          displayToast = { toastDisplay }
          influencers = { influencers }
          currentInfluencer = { currentInfluencer }
        />
      </div>
     );
  }
}
 
export default App;
