import React from 'react';
import { connect } from 'react-redux';
import fetchBooks from '../actions/fetchBooks';
import postLikedBook from '../actions/postLikedBook';
import Book from './Book';

class BookContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            likedBooks: [],
            rejectedBooks: [],
            currentBookIndex: 0
        }
    }

    componentDidMount(){
        this.props.fetchBooks();
    }


    handleLikeBook = book => {
        //dispatch 'LIKE_BOOK' with the book passed in
        //add liked: true key to book obj
        postLikedBook(book);
    }

    handleRejectBook = () => {
      this.setState({ rejectedBooks: [...this.state.rejectedBooks, this.props.books[this.state.currentBookIndex]] })
    }

   
    render() {
        const currentBook = this.props.books[this.state.currentBookIndex];
        if (currentBook) {
            return ( <Book book={currentBook} 
                     currentBookIndex={this.state.currentBookIndex} 
                     handleLikeBook={this.handleLikeBook}
                     handleRejectBook={this.handleRejectBook} /> )
        } else {
            return null;
        }
    }
}


const mapStateToProps = state => {
  return { books: state.books }
}


const mapDispatchToProps = dispatch => {
    return { 
        fetchBooks: () => dispatch(fetchBooks()), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);