import React, { Component } from "react";
import array from "./data/data";
import "./App.css";

export default class App extends Component {
  state = {
    find: "",
    result: "",
    tries: "",
  };

  handleChange(e) {
    this.setState({ find: e.target.value });
  }

  sorted = array.sort((a, b) => a - b);
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      find: "",
      result: "",
      tries: "",
    });
    this.search(this.sorted);
  }

  search(sorted, count = 0) {
    console.log(sorted);
    let find = parseInt(this.state.find);
    if (parseInt(sorted.length) === 0) {
      this.setState({ result: `No array.` });
    }

    if (
      sorted.length < 3 &&
      sorted[0] !== find &&
      sorted[1] !== find &&
      sorted[2] !== find
    ) {
      return this.setState({ result: `Value not found.` });
    }

    let i = Math.floor(sorted.length / 2);
    if (sorted[i] === find) {
      return this.setState({
        tries: `Tries: ` + count,
        result: `Value found, `,
      });
    } else if (sorted[i] > find) {
      let newArr = sorted.slice(0, i);
      count += 1;
      return this.search(newArr, count);
    } else if (sorted[i] < find) {
      let newArr = sorted.slice(i);
      count += 1;
      return this.search(newArr, count);
    }
  }

  render() {
    return (
      <section className="App__section">
        <div className="App__search-container">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label className="App__label">
              Search Number:
              <input
                className="App__input-field"
                type="number"
                value={this.state.find}
                onChange={(e) => this.handleChange(e)}
              />
            </label>
            <input
              className="App__submit-button"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
        <div className="App__result-container">
          <div className="App__result">
            {this.state.result}
            {this.state.tries}
          </div>
        </div>
      </section>
    );
  }
}
