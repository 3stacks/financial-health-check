import React from 'react';
import './app.style.css';
import FrequencySelector from "../frequency-selector/frequency-selector";

export default class App extends React.Component {
  render() {
    return (
        <div>
            <label>
                Income
                <input type="text"/>
            </label>
            <FrequencySelector onChange={(event) => console.log(event)} />
        </div>
    )
  }
}