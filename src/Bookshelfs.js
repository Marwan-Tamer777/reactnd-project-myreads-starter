import React from 'react'
import {Link} from 'react-router-dom'
import GetBook from './Book'

function BookShelfs(props){
  const {books, update} = props
  console.log("all books:",books)

    return(<div className="list-books">
      <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
        <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.filter(book => book.shelf === "currentlyReading")
                      .map((value,index)=> (<li key={index}><GetBook book={value} updateParent ={update}/></li>))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.filter(book => book.shelf === "wantToRead")
                      .map((value,index)=> (<li key={index}><GetBook book={value} updateParent ={update}/></li>))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.filter(book => book.shelf === "read")
                      .map((value,index)=> (<li key={index}><GetBook book={value} updateParent ={update}/></li>))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search" className="add-button">Add a book</Link>
              </div>
              </div>
        )
}

export default BookShelfs