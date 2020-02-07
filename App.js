import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDoList from './ToDoList'
import ToDoDisplay from './ToDoDisplay'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }

    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => console.log(json))
  }

  getInput = e => {
    const itemText = e.target.value
    const currentItem = {text: itemText, key: Date.now()}
    this.setState({
      currentItem,
    })
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: {text: '', key: ''},
      })
    }
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {l
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  render () {
  return (
    <View style={styles.container}>
      <Text>Una semplice ToDo List</Text>
      <br />
      <ToDoList
        addItem={this.addItem}
        inputElement={this.inputElement}
        getInput={this.getInput}
        currentItem={this.state.currentItem}
        />
        <ToDoDisplay list={this.state.items} deleteItem={this.deleteItem}/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;