import React, { useState, useEffect, FormEvent } from 'react';
import styles from './TaskForm.module.css';
import { ITask } from '../Interfaces/Task';

// Definição das propriedades que o componente espera
interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  closeModal?: () => void;
}

const TaskForm = ({ btnText, taskList, setTaskList, task, closeModal }: Props) => {

  // Estados para armazenar os valores do formulário
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [difficulty, setDifficulty] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Efeito para preencher o formulário com os dados da tarefa 
  // quando o componente é carregado ou a tarefa é alterada
  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  // Função chamada ao submeter o formulário
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Verificação de campos obrigatórios
    if (!title || difficulty === 0) {
      setErrorMessage('Preencha todos os campos!');
      return;
    }

    // Caso já exista uma tarefa (edição), atualiza a tarefa na lista
    if (task) {
      const updatedTasks = taskList.map((t) =>
        t.id === task.id ? { id, title, difficulty } : t
      );
      setTaskList(updatedTasks);
    } else {
      // Caso contrário (nova tarefa), cria uma nova tarefa e adiciona na lista
      const newTask: ITask = { id: Math.floor(Math.random() * 1000), title, difficulty };
      setTaskList([...taskList, newTask]);
    }

    // Limpa os campos do formulário após o envio
    setTitle('');
    setDifficulty(0);
    setErrorMessage('');


    if (closeModal) closeModal();
  };

  return (
    // Formulário com a função handleSubmit chamada ao submeter
    <form onSubmit={handleSubmit} className={styles.form}>

      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          placeholder="Título da Tarefa"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>

      {/* Campo de entrada para a dificuldade da tarefa */}
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="number"
          name="difficulty"
          placeholder="Dificuldade da Tarefa"
          onChange={(e) => setDifficulty(Number(e.target.value))}
          value={difficulty}
        />
      </div>

      {/* Exibe a mensagem de erro, caso haja algum problema */}
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}

      {/* Botão de submit que vai disparar o envio do formulário */}
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
