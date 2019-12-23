import React from 'react';
import removeLikedBook from '../actions/removeLikedBook';
import { connect } from 'react-redux';

class RemoveButton extends React.Component {

    render() {
        return <button onClick={this.props.removeFromLiked(this.props.isbn)}>X</button>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromLiked: isbn => dispatch(removeLikedBook(isbn))
    }
}

export default connect(null, mapDispatchToProps)(RemoveButton);
