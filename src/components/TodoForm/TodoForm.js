import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button/Button';

function TodoForm(props) {
  const { addTodo } = props;
  const [todo, setTodo] = useState('');

  function onSubmitHandler(e) {
    e.preventDefault();
    if (todo && todo.trim().length) {
      addTodo(todo);
      setTodo('');
    }
  }

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className={styles.input}
        placeholder="Enter new todo"
      ></input>
      <Button title="Submit" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default TodoForm;
