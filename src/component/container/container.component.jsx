import React from "react";
import { Header } from "../header/header.component";
import { Computer } from "../computer/computer.component";
import { User } from "../user/user.component";

import "./container.style.css";

import "./container.style.css";
class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      score: 0,
      target: "?",
      computer: "?",

      disabled: false
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1
    });
  };
  handleDecrement = () => {
    this.setState({
      value: this.state.value - 1
    });
  };

  generateTarget = () => {
    const target = Math.floor(Math.random() * 9);
    this.setState({ target });
    return target;
  };
  generateComputerValue = () => {
    const computer = Math.floor(Math.random() * 10);
    this.setState({
      computer
    });
    return computer;
  };

  compareGuesses = (user, computer, target) => {
    user = this.state.value;
    target = this.generateTarget();
    computer = this.generateComputerValue();

    /*console.log(target);
    console.log(computer);
    console.log(user);*/
    const userWins = Math.abs(user - target) < Math.abs(computer - target);
    const winner = userWins ? "user wins" : "computer wins";
    const winnerIs = userWins ? "user" : "computer";
    console.log();
    this.setState({ winner, winnerIs });
    return { winner, winnerIs };
  };

  /* updateScore() function. This function will be used to correctly increase the winner’
    s score after each round.*/
  updateScore = () => {
    const score = this.state.score + 1;
    this.setState({
      score
    });
    return score;
  };
  render() {
    return (
      <div className="container">
        <Header target={this.state.target} />
        <Computer
          score={this.state.score}
          computer={this.state.computer}
          isWinner={this.state.winner}
        />
        <User
          value={this.state.value}
          handleChange={this.handleChange}
          score={this.state.score}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleTarget={this.generateTagert}
          handleComputerValue={this.generateComputerValue}
          compareGuesses={this.compareGuesses}
          isWinner={this.state.winner}
        />
      </div>
    );
  }
}

export default Container;
