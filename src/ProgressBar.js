import React from 'react';
import Toggle from './Toggle';

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {price: props.start};
        this.active = true;
    }

    updatePrice = () => {
        if(!this.active)
            return;
        let newPrice = Math.floor(Math.random() * 201) - 100;
        this.setState({
            price: this.state.price === 0 || Math.sign(newPrice) === Math.sign(this.state.price) ? newPrice : 0
        });
    };

    updateActiveStatus = (active) => {
        this.active = active;
    }
    
    componentDidMount() {
        this.timerID = setInterval(
            () => this.updatePrice(),
            Math.floor(Math.random() * 1001) + 1000
          );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        let percentage = Math.abs(this.state.price) + '%';
        let colorClass = this.state.price >= 0 ? 'pbProgressBarGreen' : 'pbProgressBarRed';
        return <div className="progressBar">
                    <span className="pbValue">{this.state.price}</span>
                    <div className={colorClass + " pbProgressBarContainer"}>
                        <div className="pbProgressBar" style={{width : percentage}} />
                    </div>
                    <Toggle state={true} onToggle={this.updateActiveStatus} />
                </div>
    }
}

export default ProgressBar;