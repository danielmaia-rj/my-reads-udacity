import React from 'react';
import { PropTypes } from 'prop-types';

const Book = (props) => {
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${props.book.imageLinks.thumbnail})`
                        }}
                    />
                    <div className="book-shelf-changer">
                        <select onChange={(event) => props.changeBookShelf(props.book.id, event.currentTarget.value)} value={props.book.shelf}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors">{props.book.authors}</div>
            </div>
        </li>
    );
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    changeBookShelf: PropTypes.func.isRequired
};

export default Book;