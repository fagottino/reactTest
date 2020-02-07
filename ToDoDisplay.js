import React, {Component} from 'react';

class ToDoDisplay extends Component {
    createTasks(item) {
        return <li key={item.key}>{item.text}</li>
    }
    
    render() {
        const todoList = this.props.list
        const listItems = todoList.map(this.createTasks)
        return (
            <ul className="theList">{listItems}</ul>
        )
    }

    createTasks = item => {
        return (
          <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
            {item.text}
          </li>
        )
      }
}

export default ToDoDisplay