import React, {Component} from 'react';

class ToDoList extends Component {
    render() {
        return (
            <div className="main">
                <div className="header">
                <form onSubmit={this.props.addItem}>
                    <input
                        placeholder="Task"
                        ref={this.props.inputElement}
                        value={this.props.currentItem.text}
                        onChange={this.props.getInput}
                    />
                    <button type="submit">Aggiungi</button>
                </form>
                </div>
            </div>
        )
    }
}

export default ToDoList;