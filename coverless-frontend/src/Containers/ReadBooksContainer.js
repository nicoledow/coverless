import React from 'react';
import { connect } from 'react-redux';
import ReadBook from '../Components/ReadBook';

class ReadBooksContainer extends React.Component {

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

export default connect(mapStateToProps)(ReadBooksContainer);