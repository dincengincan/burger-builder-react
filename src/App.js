import React, {Component} from 'react';
import './App.css';
import {Hamburger, ItemList, Item, TotalPrice} from "./components";
import ingredients from "./data";
import { Z_ASCII } from 'zlib';

class App extends Component {
  constructor(props){
    super(props);
    this.state =  {
      ingredients: []
    }
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  
  isThere(){
    const is = ingredients.filter(item => {
      return this.state.ingredients.some(selectedItem => {
        return item.name === selectedItem.name;
      })
    })
    console.log(is)
  }





  addItem(item){
      this.setState({
        ingredients: [...this.state.ingredients].concat([
          {...item, displayId: Math.random()}
        ])
  })  
  }
  

  removeItem(){
    console.log("Removed!")
  }
  
  
  render(){
    
    return (
      
       <div className="App">
         
       <Hamburger selectedItem = {this.state.ingredients}/>
       <ItemList items = {ingredients}
                  addItem = {this.addItem}
                  removeItem = {this.removeItem}
                  selectedItems = {this.state.ingredients}
                   />
       <TotalPrice/>

    </div>
    )
  }
}




export default App;
