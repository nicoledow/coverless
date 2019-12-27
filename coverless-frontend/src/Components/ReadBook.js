//has prop 'data' containing data on single read book

import React from 'react';
import ReviewForm from './ReviewForm';

const ReadBook = props => {
  return (
    <div className="card">
        <div className="card-header">
            {props.data.title}
            <br /> by {props.data.author}
        </div>
        <div className="card-body">
            <ReviewForm data={props} key={`${props.isbn}-reviewform`} />   
        </div>
    </div>
  )
}

export default ReadBook;

