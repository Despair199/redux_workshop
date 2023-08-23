import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK} from "../ActionTypes/ActionTypes";

const initialState = {
    listTasks : [
        {id: Math.random(), description: 'Task1', isDone : false},
        {id: Math.random(), description: 'Task2', isDone : true},
        {id: Math.random(), description: 'Task3', isDone : true}
    ]
}

export const todoReducer = (state = initialState, {type,payload}) => {
    switch (type) {
    
    case DONE_TASK :
        return {
            ...state, listTasks: state.listTasks.map((el)=>
            el.id === payload ? {...el, isDone: !el.isDone} :el)
        }
    case DELETE_TASK:
        return{
            ...state, listTasks:state.listTasks.filter((el)=>
            el.id != payload)
        }

    case ADD_TASK:
        return {
            ...state, listTasks: [...state.listTasks, payload]
        }

    case EDIT_TASK:
        return {
            ...state, listTasks: state.listTasks.map((el)=>
            el.id === payload.id? {...el, description : payload.newDescription }: el)
        }


        default:
            return state;
    }
}