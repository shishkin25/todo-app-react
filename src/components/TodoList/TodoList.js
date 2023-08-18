import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

function TodoList(props) {
  const { todos, deleteTodo, toggleTodo } = props;
  return (
    <div className={styles.list}>
      {todos.length ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))
      ) : (
        <h3 className={styles.text}>Todo List is empty</h3>
      )}
    </div>
  );
}

export default TodoList;
