import React, {Component} from 'react';
import Toast from './components/toast';
import './css/index.css';
import Header from './components/homeHeader';
import { getInfluencers } from './services/influencerService';
class App extends Component {
  state = {  
    toastDisplay: false,
    influencers: getInfluencers(),
    currentInfluencer: 0,
    influencersToDisplay: []
  };

  displayToast = val => {
    const { influencers, currentInfluencer} = this.state;
    this.setState( { toastDisplay: true, currentInfluencer: this.getInfluencerToDisplay()});
    this.populateInfluencers(influencers[currentInfluencer]);
  }

  getInfluencerToDisplay = () => {
    const inflencersCount = this.state.influencers.length; 
    return Math.floor(Math.random() * inflencersCount);
  }

  populateInfluencers = influencer => {
    const influencers = [...this.state.influencersToDisplay];
    const index = influencers.indexOf(influencer);
    if (index <0) influencers.push(influencer);
    this.setState( { influencersToDisplay: influencers });
}


  render() { 
    const { toastDisplay, influencers, currentInfluencer, influencersToDisplay } = this.state;
    return ( 
      <div className = 'container-fluid'>
        <Header 
          onclick = { this.displayToast }
        />        
        <Toast 
          displayToast = { toastDisplay }
          influencers = { influencersToDisplay }
          currentInfluencer = { currentInfluencer }
        />
      </div>
     );
  }
}
 
export default App;
