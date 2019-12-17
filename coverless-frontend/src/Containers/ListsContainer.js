import React from 'react';
import fetchLists from '../actions/fetchLists';
import { connect } from 'react-redux';

class ListsContainer extends React.Component {
    componentDidMount () {
        this.props.fetchLists();
    }
 
    render() {
        console.log('lists container props', this.props)
        return (
            <p>Lists Component</p>
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