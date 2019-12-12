//has props: currentBookIndex, book (and associated data)

import React from 'react';

export default class Book extends React.Component {


    render() {
        console.log('Book props', this.props)
        return (
            <div className="card-content">
                <h3>{this.props.book.title}</h3>
            </div>
        )
    }
}