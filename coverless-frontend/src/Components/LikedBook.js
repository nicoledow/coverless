import React from 'react';
import RemoveButton from './RemoveButton';

export default class LikedBook extends React.Component {

    render() {
        console.log('liked book comp', this.props)
        let book = this.props.data;
        return (
            <div className="card">
                <div className="card-header">{book.title}</div>
                <div className="card-body">
                    {book.blurb}
                </div>
                <RemoveButton isbn={book.isbn}/>
            </div>
        )
    }
}