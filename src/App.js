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

async getAllBooks(){
      await BooksAPI.getAll()
      .then((res)=>(this.setState({allbooks: res})))

    }

   componentDidMount() {
      this.getAllBooks()
  }

  render() {
    return (
      <div className="app">
        <Route exact path = '/' render={()=>(
        <div>  {BookShelfs(this.state.allbooks)}</div>)}></Route>

          <Route path = '/search' render ={()=>(BookSearch())}></Route>
        
      </div>
    )
  }
}

export default BooksApp
