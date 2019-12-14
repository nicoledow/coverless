//inherits prop 'book' and associated data
//callback fns: handleLikeBook, handleRejectBook

import React from 'react';

export default class ReactionButtons extends React.Component {

    likeBook = () => {
        //console.log('made it to ReactionButtons likeBook')
        this.props.handleLikeBook(this.props.book);
    }

    render() {
        return (
            <div id="reaction-btns">
                <button onClick={this.likeBook}><span role="img" aria-label="like">💜</span></button>
                <button onClick={this.props.handleRejectBook}><span role="img" aria-label="dislike">🚫</span></button>
            </div>
        )
    }
}