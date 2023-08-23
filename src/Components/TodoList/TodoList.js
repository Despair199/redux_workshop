import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import TodoModel from '../TodoModel/TodoModel'
import { Dropdown } from 'react-bootstrap'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'


const TodoList = () => {
    const list = useSelector((state)=> state.listTasks)

    const [status, setStatus] = useState('ALL')
  return (
    <div>
      <Dropdown>
        <DropdownToggle variant='success' id="dropdown.basic">
          {status}
        </DropdownToggle>

        <Dropdown.Menu>
        <Dropdown.Item value='All' onClick={()=> setStatus('All')}>All</Dropdown.Item>
        <Dropdown.Item value='Done' onClick={()=> setStatus('Done')}>Done</Dropdown.Item>
        <Dropdown.Item value='Undone' onClick={()=> setStatus('Undone')}>Undone</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

        {
          status === 'Done' ?
          list.filter((el)=> el.isDone === true).map((task)=> <TodoModel task={task} key={task.id} />)
          :
          status === 'Undone' ?
          list.filter((el)=> el.isDone === false).map((task)=> <TodoModel task={task} key={task.id} />)
          :
          list.map((task)=>
            <TodoModel task={task} key={task.id} />)
        }
    </div>
  )
}

export default TodoList