import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(), isdone: false }]);
    let [newTodo, setnewTodo] = useState("");

    let addnewTask = () => {
        setTodos((prevTodos) => {
            return ([...prevTodos, { task: newTodo, id: uuidv4(), isdone: false }])
        });
        setnewTodo("");
    }



    let updateTodoValues = (event) => {
        setnewTodo(event.target.value);
    }

    let deleteTodoList = (id) => {
        setTodos(todos.filter((todo) => todo.id != id));
    }

    let UpperCaseAll = () => {
        setTodos(todos.map((todo) => {
            return {
                ...todo,
                task: todo.task.toUpperCase(),
            }
        }))
    }
    let MarkAsDoneAll = () => {
        setTodos(todos.map((todo) => {
            return {
                ...todo,
                isdone: true,
            }
        }))
    }

    let ClearAsAll = ()=>{
       setTodos([]);
    }

    let UpperCaseOne = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                }
            }
            else {
                return todo;
            }
        }))
    }


    let MarkAsDoneOne = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isdone: true,
                }
            }
            else {
                return todo;
            }
        }))
    }


    let LowerCaseALL = () => {
        setTodos(todos.map((todo) => {
            return {
                ...todo, task: todo.task.toLowerCase(),
            }
        }))
    }

  



    return (
        <div>
            <FloatingLabel controlId="floatingTextarea" label = {newTodo ? '': 'Add a task here' } className="mb-3  textarea">
                <Form.Control as="textarea" placeholder= 'Add a task here' value={newTodo} onChange={updateTodoValues}></Form.Control>
            </FloatingLabel>
            <br></br>
            <br></br>
            <br></br>
            <Button variant="primary"  className = "btn" onClick={addnewTask}>Add here</Button>{' '}
            <br></br>
            <hr></hr>
            <h2  className = "heading" style = {{fontWeight : "bolder", color : "black"}}>Tasks Todo</h2>
            <ul>
                {
                    
                    todos.map((todo) => (
                        
                        <li key={todo.id} >
                            <span  className="todo" style={todo.isdone ? { textDecorationLine: "line-through" } : {}}>
                                {todo.task}
                            </span>
                            {/* &nbsp;&nbsp;&nbsp; */}
                            <Button variant="danger" className = "button todobtn mt-2" onClick={() => deleteTodoList(todo.id)}>Delete</Button>{' '}
                            &nbsp;&nbsp;&nbsp;
                            <Button variant="danger"  className = "button todobtn mt-2" onClick={() => UpperCaseOne(todo.id)}>UpperCase One</Button>{' '}
                            &nbsp;&nbsp;&nbsp;
                            <Button variant="danger" className = "button todobtn mt-2" onClick={() => MarkAsDoneOne(todo.id)}>MarkAsDone One</Button>{' '}
                        </li>
                    ))
                 
                }
            </ul>
            <br></br>
            <Button variant="dark"  className = "btc ml-2 " onClick={UpperCaseAll}>UpperCase All</Button>{' '}
            <Button variant= "dark" className = "btc ml-2 " onClick={LowerCaseALL}>LowerCase All</Button>{' '}
            <Button variant="dark"  className = "btc mr-6" onClick={MarkAsDoneAll}>MarkAsDone All</Button>{' '}
            <Button variant="dark"  className = "btc mr-6" onClick={ClearAsAll}>ClearAs All</Button>{' '}
            
        </div>
    )
}