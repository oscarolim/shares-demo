import React from 'react';

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.companyIndex = props.companyIndex;
        this.state = {progress: 0};
    }

    updateProgress = () => {
        if(this.state.progress + 1 > global.game.companies[this.companyIndex].timer * 10)
        {
            this.props.progressCompletedCallback();
            this.setState({progress: 0});
        }
        else
            this.setState({progress: this.state.progress + 1});
    };

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        if(this.state.progress === 0)
        {
            clearInterval(this.timerID);
            setTimeout(
                () => {
                    clearInterval(this.timerID);
                    this.timerID = setInterval(
                        () => this.updateProgress(),
                        100
                    );
                }, 200
            )
        }
    }
    
    componentDidMount() {
        clearInterval(this.timerID);
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        let percentage = Math.ceil(this.state.progress / (global.game.companies[this.companyIndex].timer * 10) * 100) + '%';
        let colorClass = 'pbProgressBarGreen';
        return <div className="progressBar">
                    <div className={colorClass + " pbProgressBarContainer"}>
                        <div className="pbProgressBar" style={{width : percentage}} />
                    </div>
                </div>
    }
}

export default ProgressBar;