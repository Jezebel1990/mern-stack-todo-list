import { useEffect } from "react";
import { getAllTodos } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

export const Todos = () => {

const dispatch = useDispatch();

const todos = useSelector(state => state.todos);

useEffect(() => {
        dispatch(getAllTodos());
    }, [])

    return (
        <article>
            <ul>

              {
                todos.map(todo => {
                    <li>{todo.data}</li>
                })
              }  
            </ul>
        </article>
    )
}
export default Todos;