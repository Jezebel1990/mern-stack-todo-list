import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";

const TodoForm = () => {
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
       e.preventDefault();

       dispatch(addNewTodo());
    }
    const onInputChange = (e) => {
        setText(e.target.value);
    }


    return (
        <form className="form" onSubmit={onFormSubmit}>
            <div className="input-container">
            <input
               placeholder="Adicione uma nova tarefa"
               className="input"
               onChange={onInputChange}
            
            />
            </div>
            </form>
    )
}
export default TodoForm;