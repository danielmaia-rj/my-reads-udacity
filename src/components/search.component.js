import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import * as BooksAPI from '../common/books.api';
import Book from './book.component';
import { PropTypes } from 'prop-types';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            terms: ''
        }
    }

    searchBoxChange = (event) => {
        this.setState({ terms: event.target.value });
        this.search(event.target.value);
    };

    search = (value) => {
        if (value.length !== 0) {
            BooksAPI.search(value, 10).then(books => {
                if (books.length > 0) {
                    books = books.filter(book => book.imageLinks);

                    books = this.changeBookShelf(books);

                    this.setState({
                        books: books
                    });
                } else {
                    this.setState({
                        books: []
                    });
                }
            });
        } else {
            this.setState({
                books: [],
                terms: ''
            });
        }
    };

    changeBookShelf = (books) => {
        for (let book of books) {
            let bookOnShelf = this.props.books.find(b => b.id === book.id);

            if (bookOnShelf) {
                book.shelf = bookOnShelf.shelf;
            } else {
                book.shelf = 'none';
            }
        }
        return books;
    };

    render() {
        return <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search">
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <DebounceInput
                        minLength={3}
                        debounceTimeout={300}
                        type="text"
                        placeholder="Search by title or author"
                        value={this.state.terms}
                        onChange={this.searchBoxChange}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        this.state.books.map((book, index) => (
                            <Book
                                book={book}
                                key={index}
                                changeBookShelf={this.props.onChange}
                            />
                        ))
                    }
                </ol>
            </div>
        </div>
    }
}

Search.propTypes = {
    books: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Search;