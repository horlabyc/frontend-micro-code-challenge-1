import React, { Component } from 'react';
import '../css/button.css';
class Button extends Component {
    state = {  }
    
    render() { 

        return (  
            <div>
                <button className='button' onClick = { () => this.props.onclick()}>
                    View an Influencer
                </button>
            </div>
        );
    }
}
 
export default Button;