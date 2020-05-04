import React from "react";
import "./App.css";
import Companies from "./components/companies";
import GameInfo from "./components/gameInfo";

const gameDefaults = {
  credits: 2,
  companies: [
    {
      id: 1,
      name: "Paleomba",
      quantity: 0,
      base_cost: 2,
      base_production: 1,
      timer: 0.5,
    },
    {
      id: 2,
      name: "Sucosis",
      quantity: 0,
      base_cost: 10,
      base_production: 6,
      timer: 0.9,
    },
    {
      id: 3,
      name: "Capism",
      quantity: 0,
      base_cost: 50,
      base_production: 30,
      timer: 1.2,
    },
    {
      id: 4,
      name: "Hypofix",
      quantity: 0,
      base_cost: 100,
      base_production: 65,
      timer: 1.5,
    },
    {
      id: 5,
      name: "Meedoo",
      quantity: 0,
      base_cost: 250,
      base_production: 140,
      timer: 2,
    },
    {
      id: 6,
      name: "Zanoodle",
      quantity: 0,
      base_cost: 500,
      base_production: 300,
      timer: 3,
    },
  ],
};

class App extends React.Component {
  state = {
    game: gameDefaults,
  };

  handleBuyCompany = (company, cost) => {
    const game = this.state.game;
    if (cost <= game.credits) {
      const index = game.companies.indexOf(company);
      game.companies[index] = { ...company };
      game.companies[index].quantity++;
      this.setState({ game });
    }
  };

  handleProgressCompleted = (company) => {
    const game = this.state.game;
    game.credits =
      this.state.game.credits + company.base_production * company.quantity;
    this.setState({ game });
  };

  render() {
    return (
      <div className="App">
        <GameInfo credits={this.state.game.credits} />
        <Companies
          companies={this.state.game.companies}
          onBuyCompany={this.handleBuyCompany}
          onProgressCompleted={this.handleProgressCompleted}
        />
      </div>
    );
  }
}

export default App;
