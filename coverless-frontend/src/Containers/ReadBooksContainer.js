import React from 'react';
import { connect } from 'react-redux';
import ReadBook from '../Components/ReadBook';
import fetchReadBooks from '../actions/fetchReadBooks';

class ReadBooksContainer extends React.Component {

    componentDidMount() {
        console.log('comp did mount')
        this.props.getReadBooks();
    }

    render() {
        console.log('read books container props', this.props)
        return(
            <div className="container">
              {this.props.readBooks.map(b => <ReadBook data={b} key={b.isbn} />)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { readBooks: state.readBooks }
}

const mapDispatchToProps = dispatch => {
    return {
        getReadBooks: () => dispatch(fetchReadBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadBooksContainer);