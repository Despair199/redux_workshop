import React, {useState} from "react";
import {Button, Form , FormText, Modal} from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { edit_task } from "../../JS/Actions/Actions";

const EditTask= ({task}) => {
    const [show, setShow] = useState(false) ;
    const dispatch = useDispatch()

    const handleClose = () => setShow(false) ;
    const handleShow = () => setShow (true);

    const [newDescription, setNewDescription] = useState(task.description)

    const handleEdit = () => {
      dispatch(edit_task(task.id, newDescription))
      handleClose()
    }
    return (
    <div>
        <Button variant ='secondary' onClick={handleShow}> Edit</Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Edit Task </Modal.Body>
        <Form.Control value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleEdit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
)
}

export default EditTask