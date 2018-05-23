import React, { Component } from 'react'
import './App.css'
import Filter from './component/filter'
import Cards from './component/cards'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
              <Filter />
          </div>
        </div> 
        <div className="row">
          <div className="col-xs-12">
              <Cards />
          </div>
        </div>  
      </div>
      
    )
  }
}

export default App
