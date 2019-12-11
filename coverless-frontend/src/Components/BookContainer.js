import React from 'react';
import { connect } from 'react-redux';
import fetchBooks from '../actions/fetchBooks';

class BookContainer extends React.Component {

    componentDidMount(){
        fetchBooks();
    }

    render() {
        return (
            <div className="card">

            </div>
        )
    }
}

const mapStateToProps = state => {
  return { books: state.books }
}

export default connect(mapStateToProps)(BookContainer);