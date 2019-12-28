//has prop 'data' with info on single book
//this.props.submitReview will dispatch addReview, sending a post request to /reviews

import React from 'react';
import { connect } from 'react-redux';
import addReview from '../actions/addReview';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
    }

    handleChange = e => {
      this.setState({ value: e.target.value })
    }

    handleSubmit = e => {
        console.log('in handle submit')
        e.preventDefault();
        const content = e.target.querySelector('input').value;
        const isbn = this.props.data.data.isbn;
        this.props.submitReview(isbn, content);
    }

    render() {
        return(
            <div className="review-div">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input type="textarea" value={this.state.value} placeholder="Review this book" onChange={e => this.handleChange(e)} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitReview: (isbn, content) => addReview(isbn, content)
    }
}

export default connect(null, mapDispatchToProps)(ReviewForm);