import React from 'react';
import { connect } from 'react-redux';
import markAsRead from '../actions/markAsRead';

class FinishButton extends React.Component {

    handleClick = () => {
      this.props.finishBook(this.props.isbn);
    }

    render() {
        return <button onClick={this.handleClick} className="btn btn-small">✔️</button>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        finishBook: isbn => dispatch(markAsRead(isbn)) 
    }
}

export default connect(null, mapDispatchToProps)(FinishButton);

