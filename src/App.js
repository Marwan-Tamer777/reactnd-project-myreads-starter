import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import BookSearch from './BookSearch'
import BookShelfs from './Bookshelfs'



class BooksApp extends React.Component {
  state = {
    allbooks: []
  }
  
  getAllBooks = async () =>(
      await BooksAPI.getAll()
      .then((res)=>(this.setState({allbooks: res})))

    )

    bookAlreadyIn = (book) => {
     return (this.state.allbooks.filter(x => x.title === book.title)[0])
    }

   componentDidMount() {
      this.getAllBooks()
  }

  render() {
    return (
      <div className="app">
        <Route exact path = '/' render={()=>(
        <div>  <BookShelfs books={this.state.allbooks} update={this.getAllBooks} /></div>)}></Route>

          <Route path = '/search' render ={()=>(<BookSearch updateBook= {this.getAllBooks} confirm = {this.bookAlreadyIn}/>)}></Route>
        
      </div>
    )
  }
}

export default BooksApp
