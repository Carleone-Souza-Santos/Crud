import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Importa o arquivo de estilos (CSS) para a modal.
import styles from './Modal.module.css';
export const Modal = ({ children, closeModal }) => {
    return (_jsxs("div", { id: "modal", className: styles.modalOverlay, children: [_jsx("div", { className: styles.fade, onClick: closeModal }), _jsxs("div", { className: styles.modal, children: [_jsx("button", { className: styles.closeButton, onClick: closeModal, children: "X" }), children] })] }));
};
