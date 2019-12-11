import React from 'react';

export default class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-light">
              <button>My Books</button>
              <button>Discover</button>
              <button>Friends Feed</button>
            </nav>
        )
    }
}