import React from 'react';
import { connect } from 'react-redux';
import fetchBooks from '../actions/fetchBooks';

class ListButton extends React.Component {

    handleClick = () => {
        console.log('encoded name', this.props.list.list_name_encoded)
      this.props.getBooks(this.props.list.list_name_encoded);
    }

    render() {
        console.log('list props', this.props)
        return (
            <button onClick={this.handleClick}>{this.props.list.display_name}</button>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getBooks: listTitle => dispatch(fetchBooks(listTitle))
    }
}

export default connect(null, mapDispatchToProps)(ListButton);