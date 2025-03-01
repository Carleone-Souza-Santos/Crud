import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './TaskList.module.css';
export const TaskList = ({ taskList, handleDelete, handleEdit }) => {
    return (_jsx("div", { className: styles.container, children: taskList.length > 0 ? (taskList.map((task) => (_jsxs("div", { className: styles.task, children: [_jsxs("div", { className: styles.details, children: [_jsx("h4", { children: task.title }), _jsxs("p", { children: ["Dificuldade: ", _jsx("span", { children: task.difficulty })] })] }), _jsxs("div", { className: styles.actions, children: [_jsx("i", { className: "bi bi-pencil-square", onClick: () => handleEdit(task) }), _jsx("i", { className: "bi bi-trash3", onClick: () => handleDelete(task.id) })] })] }, task.id)))) : (
        // Exibe uma mensagem caso não haja tarefas na lista
        _jsx("p", { className: styles.noItems, children: "Nenhuma tarefa encontrada." })) }));
};
