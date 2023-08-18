import { RiTodoFill } from 'react-icons/ri';
import { MdDeleteForever } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

function Todo(props) {
  const { todo, deleteTodo, toggleTodo } = props;

  return (
    <div
      className={`${styles.container} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill
        className={styles.icon}
        style={todo.isCompleted ? { color: 'gray' } : {}}
      />
      <div className={styles.item}>{todo.text}</div>
      <div className={styles.iconsWrapper}>
        <MdDeleteForever
          className={styles.iconDelete}
          onClick={(e) => deleteTodo(todo.id)}
        />
        <FaCheck
          onClick={() => toggleTodo(todo.id)}
          className={styles.iconDone}
        />
      </div>
    </div>
  );
}

export default Todo;
