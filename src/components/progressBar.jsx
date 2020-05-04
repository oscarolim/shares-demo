import React from "react";

class ProgressBar extends React.Component {
  state = { progress: 0 };

  handleUpdateProgress = () => {
    if (this.props.company.quantity === 0) return;
    if (this.state.progress + 1 > this.props.company.timer * 10) {
      this.props.onProgressCompleted();
      this.setState({ progress: 0 });
    } else this.setState({ progress: this.state.progress + 1 });
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.handleUpdateProgress(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    let percentage =
      Math.ceil((this.state.progress / (this.props.company.timer * 10)) * 100) +
      "%";
    let colorClass = "pbProgressBarGreen";
    return (
      <div className="progressBar">
        <div className={colorClass + " pbProgressBarContainer"}>
          <div className="pbProgressBar" style={{ width: percentage }} />
        </div>
      </div>
    );
  }
}

export default ProgressBar;
