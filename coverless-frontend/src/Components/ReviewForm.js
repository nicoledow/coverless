//has prop 'data' with info on single book

import React from 'react';
import { connect } from 'react-redux';
import addReview from '../actions/addReview';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
    }

    handleOnChange = e => {
      this.setState({ value: e.target.value })
    }

    render() {
        return(
            <div className="review-div">
                <h4>Review this book:</h4>
                <form>
                    <input type="textarea" value={this.state.value} onChange={e => this.handleOnChange(e)} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitReview: reviewData => addReview(reviewData)
    }
}

export default connect(null, mapDispatchToProps)(ReviewForm);