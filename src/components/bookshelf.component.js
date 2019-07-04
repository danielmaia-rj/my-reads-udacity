import React from 'react';
import PropTypes from 'prop-types';
import Book from './book.component';

const BookShelf = (props) => {
    return <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {
                    props.books.map((book, index) => (
                        <Book
                            book={book}
                            key={index}
                            changeBookShelf={props.onChangeShelf}
                        />
                    ))
                }
            </ol>
        </div>
    </div>
}

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    onChangeShelf: PropTypes.func.isRequired
};

export default BookShelf;