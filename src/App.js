import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Header } from './components/Header/Header';
import { TaskList } from './components/List/TaskList';
import TaskForm from './components/Form/TaskForm';
import styles from './App.module.css';
import { Modal } from './components/Modal/Modal';
import { CoverLetter } from './components/Buttom/CoverLetter';
function App() {
    // Definição de estados usando useState
    // Estado para armazenar a lista de tarefas
    const [tasklist, setTasklist] = useState([]);
    // Estado para armazenar a tarefa a ser editada
    const [taskToUpdate, setTaskToUpdate] = useState(null);
    // Estado para controlar se a modal está aberta ou fechada
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Função para deletar uma tarefa
    const deleteTask = (id) => {
        // Filtra as tarefas, removendo a tarefa com o id fornecido
        setTasklist((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };
    // Função para abrir a modal e carregar a tarefa a ser editada
    const openModal = (task) => {
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
    return (_jsxs(_Fragment, { children: [isModalOpen && (_jsx(Modal, { closeModal: closeModal, children: _jsx(TaskForm, { btnText: "Editar Tarefa", taskList: tasklist, setTaskList: setTasklist, 
                    // Passa a tarefa para ser editada
                    task: taskToUpdate, 
                    // Função para fechar a modal após edição
                    closeModal: closeModal }) })), _jsx(Header, {}), _jsxs("main", { className: styles.main, children: [_jsxs("div", { children: [_jsx("h2", { children: "Tarefas do dia" }), _jsx(TaskForm, { btnText: "Criar Tarefa", taskList: tasklist, 
                                // Função para atualizar a lista de tarefas
                                setTaskList: setTasklist })] }), _jsx("div", { children: _jsx(TaskList, { taskList: tasklist, 
                            // Passa a função de deletar tarefa
                            handleDelete: deleteTask, 
                            // Passa a função para editar tarefa (abrir a modal)
                            handleEdit: openModal }) })] }), _jsx(CoverLetter, {})] }));
}
export default App;
