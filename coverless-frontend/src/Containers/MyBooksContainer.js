import React from 'react';
import fetchLikedBooks from '../actions/fetchLikedBooks';
import { connect } from 'react-redux';
import LikedBook from '../Components/LikedBook';

class MyBooksContainer extends React.Component {

    componentDidMount() {
      console.log('my books container mounted', this.props)
      this.props.getLikedBooks();
    }

    render() {
        return(
            this.props.likedBooks.map(b => <LikedBook data={b} />)
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