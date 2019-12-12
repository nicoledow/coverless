//has props: currentBookIndex, book (and associated data)
//callback fns: handleLikeBook, handleRejectBook

import React from 'react';
import ReactionButtons from './ReactionButtons';

export default class Book extends React.Component {


    render() {
        console.log('Book props', this.props)
        return (
            <div className="card-content">
                <h3>{this.props.book.title}</h3>
                <h4> by {this.props.book.author}</h4>
                <p>{this.props.book.description}</p>
                <ReactionButtons book={this.props.book} 
                                 handleLikeBook={this.props.handleLikeBook} 
                                 handleRejectBook={this.props.handleRejectBook} />
            </div>
        )
    }
}