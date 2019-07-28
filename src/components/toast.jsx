import React, { Component } from 'react';
import '../css/toast.css';
import { getInfluencers } from '../services/influencerService';

class Toast extends Component {
    state = {  
        influencers: getInfluencers()
    }
    render() { 
        if (this.props.displayToast) 
        return (
            <div className = 'cards' style={{ 'marginTop': '20px', 'width' : '40%'}}>
                <div className= 'cardsBody' >
                    <div style = { {'flexDirection' : 'row', 'display': 'flex'}}>
                        <h3> 3k followers </h3>
                    </div>
                </div>
            </div>
        )
        return null;
    }
}
 
export default Toast ;