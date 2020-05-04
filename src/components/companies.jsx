import React from "react";
import Company from "./company";

class Companies extends React.Component {
  render() {
    return (
      <div>
        {this.props.companies.map((company, index) => (
          <Company
            name={company.name}
            companyIndex={index}
            key={company.name.toString()}
          />
        ))}
      </div>
    );
  }
}

export default Companies;
