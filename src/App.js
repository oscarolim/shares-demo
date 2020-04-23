import React from 'react';
import './App.css';
import GameInfo from './GameInfo';
import Company from './Company';

global.game = {
  credits: 2,
  companies: [
    {name: 'Paleomba', quantity: 0, base_cost: 2, base_production: 1, timer: 0.5},
    {name: 'Sucosis', quantity: 0, base_cost: 10, base_production: 6, timer: 0.9},
    {name: 'Capism', quantity: 0, base_cost: 50, base_production: 30, timer: 1.2},
    {name: 'Hypofix', quantity: 0, base_cost: 100, base_production: 65, timer: 1.5},
    {name: 'Meedoo', quantity: 0, base_cost: 250, base_production: 140, timer: 2},
    {name: 'Zanoodle', quantity: 0, base_cost: 500, base_production: 300, timer: 3}
  ]
};

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	credits: global.game.credits
    }
  }
  
  render() {
    const Companies = ({companies}) => (
      <>
        {companies.map((company, index) => (
          <Company name={company.name} companyIndex={index} key={company.name.toString()} />
        ))}
      </>
    ); 

    return (
      <div className="App">
        <GameInfo credits={this.state.credits} />
        <Companies companies={global.game.companies} />
      </div>
    );

  }
}

export default App;