import React from 'react'
import {useSelector} from 'react-redux'
import TodoModel from '../TodoModel/TodoModel'


const TodoList = () => {
    const list = useSelector((state)=> state.listTasks)
  return (
    <div>
        {
            list.map((task)=>
            <TodoModel task={task} key={task.id} />)
        }
    </div>
  )
}

export default TodoList