import React from "react";

const ListItem = ({key, item}) => (
    <li key={key}>{item}</li>
)


class ToDoClass extends React.Component {
    state = {
        toDoInput: '',
        toDoList: ['Cycle', 'Study for the BJCP exam', 'finish creating my next beer receipe', 'get out of Plat 3 in Apex'],
    }

    componentDidMount = () => {
        function sayHello() {
            console.log('Say Hello')
        }
    }

    componentDidUpdate = () => {
        function tellMeIUpdated() {
            console.log('I updated');
        }
    }

    addToDo = () => {
        if (!this.state.toDoInput) return;

        const newList = [...this.state.toDoList];
    
        newList.push(this.state.toDoInput);

        console.log(this.state.toDoList)
    }

    handleChangeInput = (event) => {
        this.setState({toDoInput: event.target.value})
    }

    render() {
        return(
            <div>
                <h2>To Do App</h2>
                <input value={this.state.toDoInput} onChange={this.handleChangeInput} />
                <button onClick={this.addToDo}>Add To Do</button>
                <ul>
                    {this.state.toDoList.map((item, key) => {
                        return <li key={key}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default ToDoClass;