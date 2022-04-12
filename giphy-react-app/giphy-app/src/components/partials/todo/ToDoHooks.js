import { useState } from 'react';

function ToDoHooks() {
    const [toDoInput, setToDoInput] = useState('');
    const [toDoList, setToDoList] = useState([
        {text: 'Study for the BJCP exam', completed: false },
        {text: 'Cycle', completed: false },
        {text: 'brew a beer', completed: true },
    ])

    const addToDo = () => {
        if(!toDoInput) return;

        const newList = [...toDoList];
        newList.push({text: toDoInput, completed: false});
        setToDoList(newList);
        setToDoInput('');
    }

    const deleteToDo = (index) => {
        const newArray = [...toDoList];
        newArray.splice(index, 1);
        setToDoList(newArray);
    }

    const toggleToDo = (index) => {
        const newArray = [...toDoList];
        newArray[index].completed = !newArray[index.completed];

        setToDoList(newArray);
    }

    return (
        <div>
            <h2>To Do App Hooks</h2>
            <input value={toDoInput} onChange={(event) => setToDoInput(event.target.value)}></input>
            <button onClick={addToDo}>Add to do</button>
            <ul>
                {toDoList.map((toDo, key) => {
                    return(
                        <li key={key} style={{textDecoration: toDo.completed && 'line-through'}}>
                            <span onClick={() => toggleToDo(key)}>{toDo.text}</span>
                            <button onClick={() => deleteToDo(key)}>x</button>
                        </li>
                    )

                })}
            </ul>
        
        </div>
    )
}

export default ToDoHooks