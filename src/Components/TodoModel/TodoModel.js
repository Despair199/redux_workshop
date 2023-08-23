import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import {useDispatch } from 'react-redux'
import {delete_task,done_task} from '../../JS/Actions/Actions'
import EditTask from '../EditTask/EditTask'


const TodoModel = ({task}) => {
    const [show,setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    return (
        <div style={{display: "flex", justifyContent: "space-around", marginTop: ' 10px'}}>
            <span>{task.description}</span>
            <Button onClick={()=> dispatch(done_task(task.id))}> {task.isDone ? 'unDone' : 'Done'}</Button>
            <EditTask task={task}/>
            <Button onClick={handleShow} variant="danger">Delete</Button>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={()=> dispatch(delete_task(task.id))}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default TodoModel