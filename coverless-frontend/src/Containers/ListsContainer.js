import React from 'react';
import fetchLists from '../actions/fetchLists';
import { connect } from 'react-redux';
import ListButton from '../Components/ListButton';

class ListsContainer extends React.Component {
    componentDidMount () {
        this.props.fetchLists();
    }
 
    render() {
        console.log('lists container props', this.props)
        return (
            <ul>
              {this.props.lists.map(list => {
                return <li><ListButton list={list} /></li>
              })}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return { lists: state.lists }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLists: () => dispatch(fetchLists())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListsContainer);