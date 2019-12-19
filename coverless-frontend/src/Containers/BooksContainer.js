import React from 'react';
import { connect } from 'react-redux';
import fetchBooks from '../actions/fetchBooks';
import postLikedBook from '../actions/postLikedBook';
import Book from '../Components/Book';


class BooksContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            currentBookIndex: 0,
        }
    }


    //initiates postLikedBook, which starts a post fetch request to API
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
        console.log('in bookscontainer render', this.props.books[0])
        //const books = this.props.books[0];
        //let currentBook = books[this.state.currentBookIndex]
     
        // debugger;
        // if (this.state.currentBookIndex < books.length) {
        //     // console.log('books', books[0][0])
        //     // console.log('currentBook', currentBook)
        // return (
        //     <div>
        //       { books && currentBook ? <Book data={currentBook} key={currentBook.primary_isbn10} handleLikeBook={this.handleLikeBook} handleRejectBook={this.handleRejectBook} /> : <p>Loading books...</p>}
        //     </div>
        // )
        // } else {
        //     return (<p>You've finished this list! Pick a new one!</p>)
        // }
    
        return <p>BooksContainer</p>
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