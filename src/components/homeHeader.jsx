import React from 'react';
import '../css/header.css';
import Button from './button';

const Header = props => {
    return (
        <div className="row" style={{ 'paddding': '45px'}}>
            <div className="col-md-6 col-sm-12 content">
            <h3>Welcome!</h3>
            <p>Get to know more about your Influencers. Click button below to get started.</p>
            <Button 
                onclick = { () => props.onclick('name') }
            />
            </div>
        </div>  
    );
}
 
export default Header;