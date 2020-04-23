import React from 'react';
import ProgressBar from './ProgressBar';

class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensions: null,
      company: global.game.companies[props.companyIndex]
    };
  }

  progressCompleted() {
    global.game.credits += this.state.company.base_production * this.state.company.quantity;
  }

  buyCompany() {
    if(this.getCost() <= global.game.credits)
    {
      global.game.credits -= this.getCost();
      global.game.companies[this.props.companyIndex].quantity++;
      this.setState({company: global.game.companies[this.props.companyIndex]});
    }
  }

  getCost() {
    return Math.ceil(this.state.company.base_cost * Math.pow(1.07, this.state.company.quantity));
  }

  componentDidMount() {
      this.setState({
          dimensions: {
              width: this.container.offsetWidth,
              height: this.container.offsetHeight,
          },
      });
  }

  renderContent() {
      const { dimensions } = this.state;
  
      return <div>
                  <span className="name">{this.props.name}</span>
                  <ProgressBar companyIndex={this.props.companyIndex} progressCompletedCallback={this.progressCompleted.bind(this)} />
                  <span className="info">Quantity: {this.state.company.quantity}</span>
                  <span className="buy" onClick={this.buyCompany.bind(this)}>Buy one for {this.getCost()}c</span>
                  <svg height="100%" width="100%" viewBox={"0 0 " + dimensions.width + " " + dimensions.height} strokeWidth="1" fill="none" stroke="black" xmlns="http://www.w3.org/2000/svg">
                      <this.DrawnPath d={"M0 0 L" + dimensions.width + " 0"} pathLength={dimensions.width} duration={0.3} delay={0} />
                      <this.DrawnPath d={"M" + dimensions.width + " 0 L" + dimensions.width + " " + dimensions.height} pathLength={dimensions.height} duration={0.3} delay={0.3} />
                      <this.DrawnPath d={"M" + dimensions.width + " " + dimensions.height + " L0 " + dimensions.height} pathLength={dimensions.width} duration={0.3} delay={0.6} />
                      <this.DrawnPath d={"M0 " + dimensions.height + " L0 0"} pathLength={dimensions.height} duration={0.3} delay={0.9} />
                  </svg>
              </div>
    }

  render() {
      const { dimensions } = this.state;

      return <div className="share" ref={el => (this.container = el)}>
                  {dimensions && this.renderContent()}
              </div>
  }

  DrawnPath({ pathLength, duration, delay, style, ...rest}) {
    return (
      <path
        style={{
          strokeDashoffset: pathLength,
          strokeDasharray: pathLength,
          //animation: `draw ${duration}s ease-out forwards ${delay}s`,
          ...style,
        }}
        {...rest}
      />
      );
  }
}

export default Company;