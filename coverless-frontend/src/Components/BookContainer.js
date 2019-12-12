import React from 'react';
import { connect } from 'react-redux';
import fetchBooks from '../actions/fetchBooks';

class BookContainer extends React.Component {

    componentDidMount(){
        this.props.fetchBooks();
    }

    render() {
        return (
            <div className="card">
            <p>BookContainer</p>
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