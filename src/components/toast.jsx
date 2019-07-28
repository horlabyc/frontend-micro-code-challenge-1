import React, { Component } from 'react';
import '../css/toast.css';
import '../css/index.css';
class Toast extends Component {
    state = {  
        influencers: []
    }

    render() { 
        const { displayToast, influencers, currentInfluencer } = this.props;
        if (displayToast) 
        return (
            <React.Fragment>
                <div className="row">
                  { influencers.map( influencer => 
                        <div className="col-md-6">
                            <div className = 'cards' style={{ 'marginTop': '20px'}}>
                                <div className= 'cardsBody' >
                                    <div className="list d-flex align-items-center border-bottom py-3">
                                        <i className="mdi mdi-human-greeting mr-1"></i>
                                            <div className="wrapper w-100 ml-3">
                                                <p className="mb-0"><b></b> { influencer.fullName }</p>
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
                       )}
                    </div>
             
            </React.Fragment>
        )
        return null;
    }
}
 
export default Toast ;