import { GoCircleSlash } from 'react-icons/go';
import { MdDeleteForever } from 'react-icons/md';
import styles from './TodosActions.module.css';
import Button from '../UI/Button/Button';

function TodosActions(props) {
  const { completedTodosExist, deleteAllTodos, deleteCompletedTodos } = props;
  return (
    <div>
      <div className={styles.buttonContainer}>
        <Button onClick={deleteAllTodos} title="Delete All Todos">
          <GoCircleSlash />
        </Button>
        <Button
          disabled={!completedTodosExist}
          onClick={deleteCompletedTodos}
          title="Delete Completed Todos"
        >
          <MdDeleteForever />
        </Button>
      </div>
    </div>
  );
}

export default TodosActions;
