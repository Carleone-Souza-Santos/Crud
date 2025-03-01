import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import styles from './TaskForm.module.css';
const TaskForm = ({ btnText, taskList, setTaskList, task, closeModal }) => {
    // Estados para armazenar os valores do formulário
    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [difficulty, setDifficulty] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
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
    const handleSubmit = (e) => {
        e.preventDefault();
        // Verificação de campos obrigatórios
        if (!title || difficulty === 0) {
            setErrorMessage('Preencha todos os campos!');
            return;
        }
        // Caso já exista uma tarefa (edição), atualiza a tarefa na lista
        if (task) {
            const updatedTasks = taskList.map((t) => t.id === task.id ? { id, title, difficulty } : t);
            setTaskList(updatedTasks);
        }
        else {
            // Caso contrário (nova tarefa), cria uma nova tarefa e adiciona na lista
            const newTask = { id: Math.floor(Math.random() * 1000), title, difficulty };
            setTaskList([...taskList, newTask]);
        }
        // Limpa os campos do formulário após o envio
        setTitle('');
        setDifficulty(0);
        setErrorMessage('');
        if (closeModal)
            closeModal();
    };
    return (
    // Formulário com a função handleSubmit chamada ao submeter
    _jsxs("form", { onSubmit: handleSubmit, className: styles.form, children: [_jsxs("div", { className: styles.input_container, children: [_jsx("label", { htmlFor: "title", children: "T\u00EDtulo:" }), _jsx("input", { type: "text", name: "title", placeholder: "T\u00EDtulo da Tarefa", onChange: (e) => setTitle(e.target.value), value: title })] }), _jsxs("div", { className: styles.input_container, children: [_jsx("label", { htmlFor: "difficulty", children: "Dificuldade:" }), _jsx("input", { type: "number", name: "difficulty", placeholder: "Dificuldade da Tarefa", onChange: (e) => setDifficulty(Number(e.target.value)), value: difficulty })] }), errorMessage && _jsx("div", { className: styles.error, children: errorMessage }), _jsx("input", { type: "submit", value: btnText })] }));
};
export default TaskForm;
