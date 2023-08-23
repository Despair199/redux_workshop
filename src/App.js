import './App.css';
import AddTask from './Components/AddTask/AddTask';
import TodoList from './Components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <h1> Todo App (REDUX)</h1>
      <AddTask />
      <TodoList />
    </div>
  );
}

export default App;
