import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import TodosActions from './components/TodosActions/TodosActions';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const todo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, todo]);
  };

  const deleteTodoHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleTodoHandler = (id) => {
    const newTodos = [...todos];
    const index = todos.findIndex((todo) => todo.id === id);
    newTodos[index].isCompleted = !newTodos[index].isCompleted;

    setTodos(newTodos);
  };

  const amountCompletedTodos = todos.filter((todo) => todo.isCompleted).length;

  const deleteAllTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    const newTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(newTodos);
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />

      {!!todos.length && (
        <TodosActions
          completedTodosExist={!!amountCompletedTodos}
          deleteAllTodos={deleteAllTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />

      {!!amountCompletedTodos && (
        <div className={styles.description}>
          You have completed {amountCompletedTodos} todo
          {amountCompletedTodos > 1 ? 's' : ''}
        </div>
      )}
    </div>
  );
}

export default App;
