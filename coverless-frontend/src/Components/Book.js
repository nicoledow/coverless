//has props: book (and associated data), key (primary_isbn10)
//callback fns: handleLikeBook, handleRejectBook

import React from 'react';
import ReactionButtons from './ReactionButtons';
export default class Book extends React.Component {


    render() {
        return (
            <div className="card">
              <div className="card-header">{this.props.data.title}</div>
              <div className="card-body">
                  <p>By {this.props.data.author}</p>
                  <p>{this.props.data.description}</p>
                  <ReactionButtons 
                  bookKey={this.props.key} 
                  book={this.props.data} 
                  handleLikeBook={this.props.handleLikeBook} 
                  handleRejectBook={this.props.handleRejectBook}/>
              </div>
            </div>
        )
    }
}