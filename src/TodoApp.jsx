import { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store/apis';


export const TodoApp = () => {

  const [ todoId, setTodoId ] = useState(1);

  //const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);
  
  const nextTodo = () => {
    setTodoId( todoId + 1 )
  }
  const previousTodo = () => {
    if (todoId === 1) return;
    setTodoId( todoId - 1 )
  }

  return (
    <>
        <h1>Todos - RTK query</h1>
        <hr />
        <h4>isLoading:{ isLoading ? 'True' : 'False' }</h4>
        
        <pre>{ JSON.stringify( todo ) }</pre>

        <button onClick={ previousTodo }>
            Previous todo
        </button>
        
        
        <button onClick={ nextTodo }>
            Next todo
        </button>

       {/*  <ul>
          { todos.map( todo => (
            <li key={ todo.id }>
              <strong>{ todo.completed ? 'DONE' : 'Pendding' } </strong>
              { todo.title }
            </li>
          ) ) }
        </ul> */}

        
    </>
  )
}
