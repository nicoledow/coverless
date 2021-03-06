//has prop 'data' containing data on single read book

import React from 'react';

const ReadBook = props => {
  return (
    <div className="card">
        <div className="card-header">
            {props.data.title}
            <br /> by {props.data.author}
        </div>
    </div>
  )
}

export default ReadBook;

