import React, { Component } from "react";
import array from "./data/data";
import "./App.css";

export default class App extends Component {
  state = {
    find: "",
    result: "Search a number.",
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
        <div className="App__unsorted-array">
          We added an unsorted array:<br />89, 30, 25, 32, 72, 70, 51, 42, 25, 24,
          53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88,
          27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85,
          63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11,
          64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80,
          98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14,
          5
        </div>
        <div className="App__algo-explanation">
          The algorithm will sort the array in ascending order, binary search through the array, notify the user if the number he searched exists, and return the number of times the array was searched to find the number.
        </div>
      </section>
    );
  }
}
