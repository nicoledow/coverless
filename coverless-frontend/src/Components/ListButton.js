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
        console.log('buttons props', this.props)
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
        getBooks: listTitle => dispatch(fetchBooks(listTitle))
    }
}

export default connect(null, mapDispatchToProps)(ListButton);