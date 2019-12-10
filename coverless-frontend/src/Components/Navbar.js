import React from 'react';

export default class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-light">
              <button>Random</button>
              <button>Reading History</button>
              <button>Friends Feed</button>
            </nav>
        )
    }
}