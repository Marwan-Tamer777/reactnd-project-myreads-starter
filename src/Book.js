import React, { useState } from 'react'
import * as BooksAPI from './BooksAPI'

async function updateOptions(book,newShelf){
  await BooksAPI.update(book,newShelf)
      .then((res)=>(console.log("updated book: ",res)))
}

function GetBook(bookData){
    const [option, changeOption] = useState('move')

    return (<div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${bookData.imageLinks.thumbnail}")` }}></div>
                            <div className="book-shelf-changer">
                              <select value ={option} onChange={(event)=>(updateOptions(bookData, event.target.value), changeOption(event.target.value))}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{bookData.title}</div>
                          <div className="book-authors">{bookData.authors.map((value, index) => (<p>{value}</p>))}</div>
                        </div>
        )
}

export default GetBook