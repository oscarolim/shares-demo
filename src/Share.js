import React from 'react';
import ProgressBar from './ProgressBar';

class Share extends React.Component {
    render() {
      return <div className="share">
                <span className="name">{this.props.name}</span>
                <ProgressBar start={Math.floor(Math.random() * 201) - 100} />
            </div>
    }
}

export default Share;