import React from "react";
import ProgressBar from "./progressBar";

class Company extends React.Component {
  getCost() {
    return Math.ceil(
      this.props.company.base_cost * Math.pow(1.07, this.props.company.quantity)
    );
  }

  render() {
    return (
      <div className="share">
        <span className="name">{this.props.company.name}</span>
        <ProgressBar
          company={this.props.company}
          onProgressCompleted={() =>
            this.props.onProgressCompleted(this.props.company)
          }
        />
        <span className="info">Quantity: {this.props.company.quantity}</span>
        <span
          className="buy"
          onClick={() =>
            this.props.onBuyCompany(this.props.company, this.getCost())
          }
        >
          Buy one for {this.getCost()}c
        </span>
      </div>
    );
  }
}

export default Company;
