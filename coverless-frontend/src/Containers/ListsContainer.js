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
        if (this.props.lists) {
            if (this.props.lists.length >= 1) {
                return (
                    <ul>
                        {this.props.lists.map(list => {
                            return <li><ListButton list={list}/></li>
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
    return { lists: state.lists }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLists: () => dispatch(fetchLists())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListsContainer);