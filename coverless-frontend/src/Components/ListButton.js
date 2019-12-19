import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import fetchBooks from '../actions/fetchBooks';

class ListButton extends React.Component {
    constructor() {
        super();
        this.state = { toBooksContainer: false }
    }

    handleClick = () => {
      console.log('handle click')
      this.props.getBooks(this.props.list.list_name_encoded);
    }

    componentDidUpdate() {
        if (this.props.requesting === true) {
            this.setState({ toBooksContainer: true })
        }
    }

    render() {
        if (this.state.toBooksContainer === true ) {
            return <Redirect to="/books" />
        }
        return (
            <button className="btn btn-secondary" onClick={this.handleClick}>
                {this.props.list.display_name}
            </button>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        getBooks: (listName) => dispatch(fetchBooks(listName)),
        updateCurrentList: (listName) => dispatch({ type: 'UPDATE_CURRENT_LIST', listName })
    }
}

const mapStateToProps = state => {
    return { books: state.books, requesting: state.requesting }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListButton);