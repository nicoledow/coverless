import React from 'react';
import fetchLikedBooks from '../actions/fetchLikedBooks';

export default class MyBooksContainer extends React.Component {

    componentDidMount() {
        console.log('my books container mounted')
      fetchLikedBooks();
    }

    render() {
        return(
            <p>MyBooksContainer</p>
        )
    }
}