# Coverless
## An app for those who unintentionally judge books by their covers.
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

## Credits
Thank you to the New York Times Books API for providing book data.

## License
This project is under an MIT license.

Copyright 2019 Nicole Dow

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.