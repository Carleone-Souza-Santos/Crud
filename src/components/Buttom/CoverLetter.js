import { jsx as _jsx } from "react/jsx-runtime";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from '../Buttom/CoverLetter.module.css';
export const CoverLetter = () => {
    return (_jsx("a", { href: "https://www.linkedin.com/in/carleone-santos/", className: styles.btn, target: "_blank", rel: "noopener noreferrer", children: _jsx("button", { className: "btn rounded-circle", children: _jsx("img", { src: "https://raw.githubusercontent.com/Carleone-Souza-Santos/Gest_finan/refs/heads/main/gestor-financeiro/src/public/assets/log.png", alt: "Autor", className: styles.photoLink }) }) }));
};
