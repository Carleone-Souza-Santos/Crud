// Importa o arquivo de estilos (CSS) para a modal.
import styles from './Modal.module.css';


// Tipo para o conteúdo que será exibido dentro da modal. de conteúdo JSX, componentes, etc.)
interface Props {
  children: React.ReactNode;
  // Função para fechar a modal. Essa função será chamada quando o usuário clicar 
  // no botão de fechar ou no overlay.
  closeModal: () => void;
}

export const Modal = ({ children, closeModal }: Props) => {
  return (
    <div id="modal" className={styles.modalOverlay}>
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={closeModal}>X</button>
        {children}
      </div>
    </div>
  );
};
