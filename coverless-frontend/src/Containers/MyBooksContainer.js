//renders a card for each book marked as 'liked' (fetched from /likedbooks in the backend)

import React from 'react';
import fetchLikedBooks from '../actions/fetchLikedBooks';
import { connect } from 'react-redux';
import LikedBook from '../Components/LikedBook';

class MyBooksContainer extends React.Component {

    componentDidMount() {
      this.props.getLikedBooks();
    }

    componentDidUpdate() {
        console.log('MyBooksContainer did update', this.props)
    }

    render() {
        return(
            <div className="contianer">
              {this.props.likedBooks.map(b => <LikedBook data={b} />)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { likedBooks: state.likedBooks }
}

const mapDispatchToProps = dispatch => {
    return {
        getLikedBooks: () => dispatch(fetchLikedBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBooksContainer);