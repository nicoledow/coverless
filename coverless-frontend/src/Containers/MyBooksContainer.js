import React from 'react';
import fetchLikedBooks from '../actions/fetchLikedBooks';
import { connect } from 'react-redux';

class MyBooksContainer extends React.Component {

    componentDidMount() {
      console.log('my books container mounted')
      fetchLikedBooks();
    }

    componentDidUpdate() {
        console.log('my books container updated');
        fetchLikedBooks();
    }

    render() {
        return(
            <p>MyBooksContainer</p>
        )
    }
}

const mapStateToProps = state => {
    return { likedBooks: state.likedBooks }
}

export default connect(mapStateToProps)(MyBooksContainer);