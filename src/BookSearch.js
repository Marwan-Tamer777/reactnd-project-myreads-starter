import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import GetBook from './Book'


class BookSearch extends React.Component{

  state={
      searchedBooks: [],
      empty: 0
  }

  async displaySearch(term){
    term === '' ? 
    (setTimeout(()=>(this.setState({searchedBooks: [], empty: 0})), 1000))
    :
    (await BooksAPI.search(term)
      .then((res)=>( 
        res.error === undefined ? (this.setState({searchedBooks: res, empty: 0})) : (this.setState({searchedBooks: [], empty:1}))
        ))
      )
  }

    render(){
      return (<div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onInput={(event)=>(this.displaySearch(event.target.value))}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {console.log("searched books: ", this.state.searchedBooks) , this.state.empty === 1 ? <div>we couldn't find any books sadly</div> : 
                this.state.searchedBooks.map((value,index)=> (<li key= {index} ><GetBook  book={value} updateParent={this.props.updateBook} confirmBook = {this.props.confirm}/></li>))}
              </ol>
            </div>
          </div>)
          }
}

export default BookSearch