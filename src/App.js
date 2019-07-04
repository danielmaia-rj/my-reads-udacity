import React from 'react'
import * as BooksAPI from './common/books.api';
import Routes from './common/routes';
import './App.css'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => this.setState({
      books: books
    }));
  }

  updateBook = (bookId, shelf) => {
    BooksAPI.update(bookId, shelf).then(() => this.getAllBooks());
  }

  render() {
    return (
      <div className="app">
        <Routes books={this.state.books} updateBooks={this.updateBook} />
      </div>
    )
  }
}

export default BooksApp
