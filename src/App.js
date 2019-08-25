import React, { Component } from 'react';
import './App.css';
import generatorFunc from '../src/helpers/generator';
import NumberRow from '../src/NumberRow';

export default class App extends Component {
  state = {
    numbers: null,
    phoneNumbers: [],
  }
  
  componentDidMount() {
  }

  handleInputChange = e => {
    this.setState({ numbers: e.target.value });
  }

  handlePhoneNumberGeneration = (e) => {
    e.preventDefault()
    const { numbers } = this.state;
    const phoneNumbers = generatorFunc(numbers);
    this.setState(
      () => ({phoneNumbers})
      );
    localStorage.setItem('phoneNumbers', JSON.stringify(phoneNumbers));
  }

  renderTopPane() {
    return(
    <div className="top-pane">
        <div className="app-title">
                <span>numberTron_`</span>
            </div>
    </div>
    )
  }

  renderLeftPane() {
    return(
      <div className="left-pane">
        <div className="custom-form">
          <input className="number-input" type="number"
          placeholder="Amount to be generated"
          onInput={this.handleInputChange}/>

          <button 
          className="button"
          onClick={this.handlePhoneNumberGeneration}
          >Generate
          </button>
        </div>
      </div>
      )
  }

  renderRightPane() {
    console.log(this.state.phoneNumbers)
    const phoneNumbers = this.state.phoneNumbers;
    return(
      <div className="right-pane">
        {
          phoneNumbers.map(
            (phoneNumber) => {
              return(<NumberRow phoneNumber={phoneNumber}/>);
            }
          )
        }
        {/*  */}
      </div>
      )
  }

  render () {
    return(
      <div className="page-container">
        {this.renderTopPane()}
        <div className="content-area">
        {this.renderLeftPane()}
        {this.renderRightPane()}
        </div>
      </div>
    );
  }

}


