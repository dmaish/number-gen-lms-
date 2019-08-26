import React, { Component } from 'react';
import './App.css';
import generatorFunc from '../src/helpers/generator';
import NumberRow from '../src/NumberRow';

export default class App extends Component {
  state = {
    numbers: null,
    phoneNumbers: [],
    sort: "ascending",
    minimum: null,
    maximum: null,
  }
  
  componentDidMount() {
  }

  handleInputChange = e => {
    this.setState({ numbers: e.target.value });
  }

  handleSorting = e => {
    e.preventDefault();
    const { sort, phoneNumbers } = this.state;


    if(sort === "ascending") {
      this.setState({phoneNumbers: phoneNumbers.sort()});
      this.setState({sort: "descending"})
    } else if (sort === "descending") {
      this.setState({phoneNumbers: phoneNumbers.reverse()});
      this.setState({sort: "ascending"});
    }
  }

  handleMinMaxGeneration = e => {
    e.preventDefault();
    const {phoneNumbers} = this.state;
    const min = Math.min(...phoneNumbers);
    const max = Math.max(...phoneNumbers);
    this.setState({minimum: min, maximum: max});
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
          <input 
          className="number-input" 
          type="number"
          placeholder="Amount to be generated"
          name="numberInput"
          onInput={this.handleInputChange}/>

          <button 
          className="button"
          onClick={this.handlePhoneNumberGeneration}
          >Generate
          </button>

          <button 
          className="button-sort"
          onClick={this.handleSorting}
          >
            sort {this.state.sort}
          </button>

          <button 
          className="button"
          onClick={this.handleMinMaxGeneration}
          >
            max/min 
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
        
        <div className="numbers-container">
        {
          phoneNumbers.map(
            (phoneNumber) => {
              return(<NumberRow phoneNumber={phoneNumber}/>);
            }
          )
        }
        </div>
        <div className="min-max-container">
          <div className="min">
            min number: {this.state.minimum}
          </div>
          <div className="max">
            max number: {this.state.maximum}
          </div>
        </div>
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


