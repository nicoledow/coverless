import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import fetchBooks from '../actions/fetchBooks';

class ListButton extends React.Component {
    constructor() {
        super();
        this.state = { toBookContainer: false }
    }

    handleClick = () => {
        console.log('in handleClick listButton', this.props.list.list_name_encoded)
      this.props.getBooks(this.props.list.list_name_encoded)
      this.setState({ toBookContainer: true })
    }

    render() {
        console.log(this.props)
        if (this.state.toBookContainer === true ) {
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
        getBooks: listName => dispatch(fetchBooks(listName))
    }
}

export default connect(null, mapDispatchToProps)(ListButton);