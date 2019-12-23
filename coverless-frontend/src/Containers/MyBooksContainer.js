import React from 'react';
import fetchLikedBooks from '../actions/fetchLikedBooks';
import { connect } from 'react-redux';

class MyBooksContainer extends React.Component {

    componentDidMount() {
      console.log('my books container mounted', this.props)
      //fetchLikedBooks();
      this.props.getLikedBooks();
    }

    // componentDidUpdate() {
    //     console.log('my books container updated', this.props);
    //     //fetchLikedBooks();
    //     this.props.getLikedBooks()
    // }

    render() {
        return(
            <p>MyBooksContainer</p>
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