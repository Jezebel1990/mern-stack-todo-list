import { useState } from "react";
import { toggleTodo, updateTodo} from "../redux/actions";

import { deleteTodo } from "../redux/actions";

import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {

    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo.data);

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
       e.preventDefault();

        setEditing(prevState => !prevState);

        dispatch(updateTodo(todo._id, text))
    }

    return (

        <div className="task-container"> 
        <li 
        className="task"
        onClick={() => dispatch(toggleTodo(todo._id))}
        style={{
            textDecoration: todo?.done ? 'line-through' : '',
            color: todo?.done ? '#bdc3c7' : '#faa53f'

        }}
        >
            <span style={{ display: editing ? 'none' : '' }} >{todo.data}</span>

            <form
                style={{ display: editing ? 'inline' : 'none' }}
                onSubmit={onFormSubmit}
            >
                <input
                    type="text"
                    value={text}
                    className="edit-todo"
                    onChange={(e) => setText(e.target.value)}
                />
            </form>


            <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}
            style={{ color: '#de4130'
        }}
            >
                <i className="fas fa-trash"/>
            </span>

            <span className="icon"onClick={() => setEditing(prevState => !prevState)}
            style={{ color: '#8d0ea3'
        }}
            >
                <i className="fas fa-pen" />
            </span>
        </li>
        </div>
    )
}

export default Todo;