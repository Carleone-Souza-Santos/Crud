import { useState } from 'react';
import { Header } from './components/Header/Header';
import { TaskList } from './components/List/TaskList';
import TaskForm from './components/Form/TaskForm';
import styles from './App.module.css';
import { ITask } from './components/Interfaces/Task';
import { Modal } from './components/Modal/Modal';
import { CoverLetter } from './components/Buttom/CoverLetter';



function App() {
  // Definição de estados usando useState
  // Estado para armazenar a lista de tarefas
  const [tasklist, setTasklist] = useState<ITask[]>([]);
  // Estado para armazenar a tarefa a ser editada
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);
  // Estado para controlar se a modal está aberta ou fechada
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // Função para deletar uma tarefa
  const deleteTask = (id: number) => {
    // Filtra as tarefas, removendo a tarefa com o id fornecido
    setTasklist((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Função para abrir a modal e carregar a tarefa a ser editada
  const openModal = (task: ITask) => {
    // Define a tarefa que será editada no estado
    setTaskToUpdate(task);
    // Abre a modal
    setIsModalOpen(true);
  };

  // Função para fechar a modal
  const closeModal = () => {
    // Limpa a tarefa que estava sendo editada
    setTaskToUpdate(null);
    // Fecha a modal
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Renderiza a Modal somente se isModalOpen for true */}
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          {/* Passa o conteúdo para a modal */}
          <TaskForm
            btnText="Editar Tarefa"
            taskList={tasklist}
            setTaskList={setTasklist}
            // Passa a tarefa para ser editada
            task={taskToUpdate}
            // Função para fechar a modal após edição
            closeModal={closeModal}
          />
        </Modal>
      )}

      {/* Componente Header */}
      <Header />

      <main className={styles.main}>
        {/* Seção para criação de tarefa */}
        <div>
          <h2>Tarefas do dia</h2>
          {/* Formulário para criar uma nova tarefa */}
          <TaskForm
            btnText="Criar Tarefa"
            taskList={tasklist}
            // Função para atualizar a lista de tarefas
            setTaskList={setTasklist}
          />
        </div>

        {/* Seção para listar as tarefas */}
        <div>
          {/* Componente TaskList que exibe a lista de tarefas */}
          <TaskList
            taskList={tasklist}
            // Passa a função de deletar tarefa
            handleDelete={deleteTask}
            // Passa a função para editar tarefa (abrir a modal)
            handleEdit={openModal}
          />
        </div>
      </main>
      <CoverLetter />
    </>
  );
}

export default App;
