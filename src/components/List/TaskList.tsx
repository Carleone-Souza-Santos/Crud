import { ITask } from '../Interfaces/Task';
import styles from './TaskList.module.css';

// Definição das propriedades que o componente espera
interface Props {
  // Lista de tarefas
  taskList: ITask[];
  // Função para deletar uma tarefa
  handleDelete(id: number): void;
  // Função para editar uma tarefa
  handleEdit(task: ITask): void;
}

export const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
  return (
    <div className={styles.container}>
      {/* Condicional para verificar se há tarefas na lista */}
      {taskList.length > 0 ? (

        taskList.map((task) => (
          <div key={task.id} className={styles.task}>

            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: <span>{task.difficulty}</span></p>
            </div>

            {/* Contém as ações (editar e deletar) para cada tarefa */}
            <div className={styles.actions}>

              <i className="bi bi-pencil-square" onClick={() => handleEdit(task)}></i>

              <i className="bi bi-trash3" onClick={() => handleDelete(task.id)}></i>
            </div>
          </div>
        ))
      ) : (
        // Exibe uma mensagem caso não haja tarefas na lista
        <p className={styles.noItems}>Nenhuma tarefa encontrada.</p>
      )}
    </div>
  );
};
