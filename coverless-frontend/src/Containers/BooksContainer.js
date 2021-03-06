//holds books from store and maps over them, creating a card for the current book

import React from 'react';
import { connect } from 'react-redux';
import fetchBooks from '../actions/fetchBooks';
import postLikedBook from '../actions/postLikedBook';
import Book from '../Components/Book';
import { Redirect } from 'react-router-dom';


class BooksContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            currentBookIndex: 0,
        }
    }

    handleLikeBook = book => {
        this.setState((prevState) => ({
            currentBookIndex: prevState.currentBookIndex + 1
          }));
        this.props.postLikedBook(book);
    }

    handleRejectBook = () => {
        this.setState((prevState) => ({
            currentBookIndex: prevState.currentBookIndex + 1
          }));
    }

   
    render() {
        if (this.props.books[0]) {
            let books = this.props.books[0];
            let currentBook = books[this.state.currentBookIndex];
            if (this.state.currentBookIndex < books.length) {
                return <Book data={currentBook} key={currentBook.primary_isbn10} handleLikeBook={this.handleLikeBook} handleRejectBook={this.handleRejectBook} />
            } else {
                return (<p>You've finished this list! Pick a new one!</p>)
            }
        } else {
            return <Redirect to="/" />
        }
      }
}


const mapStateToProps = state => {
  return { books: state.books, currentList: state.currentList }
}


const mapDispatchToProps = dispatch => {
    return { 
        fetchBooks: () => dispatch(fetchBooks()),
        postLikedBook: book => dispatch(postLikedBook(book)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer);