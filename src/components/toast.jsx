import React, { Component } from 'react';
import '../css/toast.css';
import '../css/index.css';
class Toast extends Component {
    state = {  
    }
    render() { 
        const { displayToast, influencers, currentInfluencer } = this.props;
        if (displayToast) 
        return (
            <div className="row">
                <div className="col-md-6 offset-md-6">
                        <div className = 'cards' style={{ 'marginTop': '20px'}}>
                            <div className= 'cardsBody' > 
                                <div className="d-flex align-items-center border-bottom py-3">
                                    {/* <img className="img-sm rounded-circle" src="../assets/images/face4.png" alt="" /> */}
                                    <i className="mdi mdi-human-greeting mr-1"></i>
                                        <div className="wrapper w-100 ml-3">
                                            <p className="mb-0"><b>{ influencers[currentInfluencer].fullName } </b></p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <i className="mdi mdi-clock-outline text-muted mr-1"></i>
                                                    <small className="text-muted ml-auto">2 hours ago</small>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
        )
        return null;
    }
}
 
export default Toast ;