//renders a card with book title, author, blurb, and a link to buy it on Amazon

import React from 'react';
import RemoveButton from './RemoveButton';
import FinishButton from './FinishButton';

export default class LikedBook extends React.Component {

    render() {
        let book = this.props.data;
        let book_url = book.amazon_url;
        return (
            <div className="card">
                <div className="card-header">{book.title} 
                <br/> by {book.author}
                <FinishButton isbn={book.isbn} />
                <RemoveButton isbn={book.isbn}/>
                </div>
                <div className="card-body">
                    <p>{book.blurb}</p>
                    <button className="btn btn-info"><a href={book_url} target="_blank">Buy on Amazon</a></button>
                </div>
            </div>
        )
    }
}