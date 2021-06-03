import React from 'react'
import * as BooksAPI from './BooksAPI'



class GetBook extends React.Component{

  state = {
    option: this.props.book.shelf
  }

  async updateOptions(book,newShelf){
  await BooksAPI.update(book,newShelf)
      .then((res)=>(console.log("updated book: ",res)))
      .then(()=>(this.setState({"option":newShelf})))
      .then(this.props.updateParent)
  }
   render(){ return (<div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}></div>
                            <div className="book-shelf-changer">
                              <select value ={this.state.option} onChange={(event)=>(this.updateOptions(this.props.book, event.target.value))}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{this.props.book.title}</div>
                          <div className="book-authors">{this.props.book.authors.map((value, index) => (<p>{value}</p>))}</div>
                        </div>
        )}
}

export default GetBook