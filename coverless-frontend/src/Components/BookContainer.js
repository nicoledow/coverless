import React from 'react';
import { connect } from 'react-redux';
import fetchBooks from '../actions/fetchBooks';
import Book from './Book';
import ReactionButtons from './ReactionButtons';

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


    likeBook = () => {
      this.setState({ likedBooks: [...this.state.likedBooks, this.props.books[this.state.currentBookIndex]] })
    }

    rejectBook = () => {
      this.setState({ rejectedBooks: [...this.state.rejectedBooks, this.props.books[this.state.currentBookIndex]] })
    }

    //clean this up???
    render() {
        const currentBook = this.props.books[this.state.currentBookIndex];
        if (currentBook) {
            return ( <Book book={currentBook} 
                     currentBookIndex={this.state.currentBookIndex} 
                     handleLikeBook={this.likeBook}
                     handleRejectBook={this.rejectBook} /> )
        } else {
            return null;
        }
    }
}


const mapStateToProps = state => {
  return { books: state.books }
}


const mapDispatchToProps = dispatch => {
    return { fetchBooks: () => dispatch(fetchBooks()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);