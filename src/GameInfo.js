import React from 'react';

class GameInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {credits: global.game.credits};
    }

    updateInfo() {
        this.setState({credits: global.game.credits});
    }
  
    componentDidMount() {
        this.timerID = setInterval(
            () => this.updateInfo(),
            100
          );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
  
    render() {
        return (
            <div className="gameinfo">
                credits <span className="credits">{this.state.credits}</span>
            </div>
          );
    }
}

export default GameInfo;