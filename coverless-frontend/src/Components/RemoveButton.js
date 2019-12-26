//button launches a delete request to /likedbooks/:isbn

import React from 'react';
import removeLikedBook from '../actions/removeLikedBook';
import { connect } from 'react-redux';

class RemoveButton extends React.Component {

    handleClick = () => {
        console.log('X was clicked');
        this.props.removeFromLiked(this.props.isbn);
    }

    render() {
        return <button onClick={this.handleClick} className="btn btn-info">X</button>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromLiked: isbn => dispatch(removeLikedBook(isbn))
    }
}

export default connect(null, mapDispatchToProps)(RemoveButton);
