import React from 'react';
import { Redirect } from 'react-router-dom';

//why is listName becoming 'undefined' between when it's passed in here as an arg and when it's interpolated into the url for fetch?

export default function fetchBooks(listName) {
    console.log('listname in fetchBooks', listName)
    return (dispatch) => {
        console.log('listname second time', listName)
        dispatch({ type: 'START_ADDING_BOOKS_REQ', listName });
        fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${listName}.json?api-key=wTKFIAS8RlozOV97WtdavvcQJ0zfalZD`)
        .then(response => response.json())
        //.then(booksData => console.log('booksData in fetchBooks', booksData))
        .then(booksData => {
            dispatch({ type: 'ADD_BOOKS', books: booksData.results.books, listName })
        })
    };
}
