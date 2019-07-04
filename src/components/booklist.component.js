import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import BookShelf from './bookshelf.component';

const BookList = (props) => {
    return <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div>
                <BookShelf
                    title="Currently Reading"
                    books={props.books.filter((book) => book.shelf === 'currentlyReading')}
                    onChangeShelf={props.onChange}
                />
                <BookShelf
                    title="Want to Read"
                    books={props.books.filter((book) => book.shelf === 'wantToRead')}
                    onChangeShelf={props.onChange}
                />
                <BookShelf
                    title="Read"
                    books={props.books.filter((book) => book.shelf === 'read')}
                    onChangeShelf={props.onChange}
                />
            </div>
        </div>
        <div className="open-search">
            <Link to="/search">Add a book</Link>
        </div>
    </div>
}

BookList.propTypes = {
    books: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};

export default BookList;