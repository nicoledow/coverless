import React from 'react';
import { connect } from 'react-redux';
import fetchBooks from '../actions/fetchBooks';
import Book from './Book';

class BookContainer extends React.Component {

    componentDidMount(){
        this.props.fetchBooks();
    }

    render() {
        return (
            <div className="card">
              <Book />
            </div>
        )
    }
}

const mapStateToProps = state => {
  return { books: state.books }
}

// function mapDispatchToProps(dispatch){
//     return { fetchAstronauts: () => dispatch(fetchAstronauts()) }
//   }

const mapDispatchToProps = dispatch => {
    return { fetchBooks: () => dispatch(fetchBooks()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);