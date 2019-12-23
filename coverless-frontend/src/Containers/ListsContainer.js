import React from 'react';
import fetchLists from '../actions/fetchLists';
import { connect } from 'react-redux';
import ListButton from '../Components/ListButton';
import fetchBooks from '../actions/fetchBooks';

class ListsContainer extends React.Component {
    componentDidMount () {
        this.props.getLists();
    }

 
    render() {
        console.log('rendering ListContainer')
        if (this.props.lists) {
            if (this.props.lists.length >= 1) {
                return (
                    <ul>
                        {this.props.lists.map(list => {
                            return <li> <ListButton list={list} /> </li>
                        })}
                    </ul>
                )
            } else {
                return <p>Loading lists...</p>
            }
        }
    }
}

const mapStateToProps = state => {
    return { lists: state.lists, currentList: state.currentList }
}

const mapDispatchToProps = dispatch => {
    return {
        getLists: () => dispatch(fetchLists()),
        getBooks: listName => dispatch(fetchBooks(listName)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListsContainer);