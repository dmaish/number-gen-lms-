import React, { Component } from 'react';
import './numberRow.css';

export default class NumberRow extends Component { 
    render(){
        const phoneNumber = this.props.phoneNumber; 
        return(
            <div className="number-row">
                {phoneNumber}
            </div>
        );
    }
}