import React from 'react';
import fetchLists from '../actions/fetchLists';
import { connect } from 'react-redux';

class ListsContainer extends React.Component {
    componentDidMount () {
        this.props.fetchLists();
    }
 
    render() {
        return (
            <p>Lists Component</p>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLists: () => dispatch(fetchLists())
    }
}

export default connect(null, mapDispatchToProps)(ListsContainer);