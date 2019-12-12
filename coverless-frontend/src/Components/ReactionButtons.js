//inherits prop 'book' and associated data
//callback fns: handleLikeBook, handleRejectBook

import React from 'react';

export default class ReactionButtons extends React.Component {


    render() {
        return (
            <div id="reaction-btns">
                <button onClick={this.props.handleLikeBook}>💜</button>
                <button onClick={this.props.handleRejectBook}>🚫</button>
            </div>
        )
    }
}