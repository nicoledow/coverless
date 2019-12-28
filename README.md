# Coverless
## An app for those who get unintentionally judge a book by its cover.
Coverless is a tinder-style application that lets you browse New York Times bestsellers lists and 'like' or 'reject' books based on their description, not their cover. 

## Build Status and Contributions
Coverless is a work in progress, and user accounts are coming soon! Contributions and pull requests are welcome.

## Technologies Used
The frontend of coverless is a Reactjs application, and uses a Rails back end. The database is configured using PostgreSQL.

## Installation and How to Use
Fork and clone Coverless onto your local machine. In one terminal tab, run the following command:

$cd coverless-api

This will put you into the API directly. From here, you can start your Rails server by typing:

$rails s

In a second tab, change into the Reactjs frontend by typing:

$cd coverless-frontend

From here, run the following commands to launch the application in your default browser:

$npm install
$npm start

Rails will default to localhost:3000, and this version of Coverless assumes all fetch requests to the database should be directed to this address. If you use a different port, you will need to update BASE_URL in index.js.