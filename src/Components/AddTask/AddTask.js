import react, {useState} from 'react'
import {Button, Form} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { add_task } from '../../JS/Actions/Actions'

const AddTask = () => {
    const [description, setDescription] = useState ('')
    const dispatch = useDispatch ()

    const handleAdd = () => {
        dispatch (add_task({id:Math.random(), description, isDone: false}))
    }


return (
    <div>
        <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} placeholder='AddNewTask' />
        <Button onClick={()=>handleAdd()}> Add Task</Button>
    </div>
)

}

export default AddTask