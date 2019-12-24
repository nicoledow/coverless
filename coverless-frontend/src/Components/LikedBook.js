import React from 'react';
import RemoveButton from './RemoveButton';
import { Link } from 'react-router-dom';

export default class LikedBook extends React.Component {

    render() {
        console.log('liked book comp', this.props)
        let book = this.props.data;
        let book_url = book.amazon_url;
        return (
            <div className="card">
                <div className="card-header">{book.title} <br/> by {book.author}</div>
                <div className="card-body">
                    {book.blurb}
                </div>
                <button><a href={book_url} target="_blank">Buy on Amazon</a></button>
                <RemoveButton isbn={book.isbn}/>
            </div>
        )
    }
}