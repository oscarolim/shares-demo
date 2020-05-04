import React from "react";
import Company from "./company";

class Companies extends React.Component {
  render() {
    return (
      <div>
        {this.props.companies.map((company) => (
          <Company
            company={company}
            key={company.id}
            onBuyCompany={this.props.onBuyCompany}
            onProgressCompleted={this.props.onProgressCompleted}
          />
        ))}
      </div>
    );
  }
}

export default Companies;
