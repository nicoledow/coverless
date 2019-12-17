import React from 'react';
import { connect } from 'react-redux';
import fetchBooks from '../actions/fetchBooks';
import postLikedBook from '../actions/postLikedBook';
import Book from './Book';

class BookContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            isFetching: false
        }
    }

    //loads book data from NYT API
    componentDidMount() {
        this.setState({ isFetching: true });
        this.props.fetchBooks();
    }
 

    //initiates postLikedBook, which starts a post fetch request to API
    handleLikeBook = book => {
        this.props.postLikedBook(book);
    }

    //adds book to rejected array in state
    handleRejectBook = () => {
      this.setState({ rejectedBooks: [...this.state.rejectedBooks, this.props.books[this.state.currentBookIndex]] })
    }


   
    render() {
      return(
          <div>
              {this.props.books[0] ? this.props.books[0].map(b => <Book data={b} key={b.primary_isbn10} handleLikeBook={this.handleLikeBook} handleRejectBook={this.handleRejectBook} />) : <p>Loading Books...</p>}
          </div>
      )
    }
}


const mapStateToProps = state => {
  return { books: state.books }
}


const mapDispatchToProps = dispatch => {
    return { 
        fetchBooks: () => dispatch(fetchBooks()),
        postLikedBook: book => dispatch(postLikedBook(book)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);