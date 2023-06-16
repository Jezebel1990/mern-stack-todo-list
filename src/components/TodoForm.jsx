import { useState } from "react";

const TodoForm = () => {
    const [text, setText] = useState("");


    const onFormSubmit = () => {

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