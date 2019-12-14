//inherits prop 'book' and associated data
//callback fns: handleLikeBook, handleRejectBook

import React from 'react';

export default class ReactionButtons extends React.Component {


    render() {
        return (
            <div id="reaction-btns">
                <button onClick={this.props.handleLikeBook}><span role="img" aria-label="like">💜</span></button>
                <button onClick={this.props.handleRejectBook}><span role="img" aria-label="dislike">🚫</span></button>
            </div>
        )
    }
}