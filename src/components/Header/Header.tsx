import styles from "./Header.module.css";



export const Header = () => {

  return (
    <header className={styles.header}>

      <div className={styles.photoContainer}>
        <img
          className={styles.photo}
          src="https://avatars.githubusercontent.com/u/109290792?s=400&u=808f03981b3842b88d1f12709b004f3c331884b4&v=4"
          alt="Author"
        />

      </div>

      <div className={styles.photoContainer}>
        <img
          className={styles.photo}
          src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg"
          alt="Typescript"
        />
        <img
          className={styles.photo}
          src="https://uploads.sitepoint.com/wp-content/uploads/2021/04/1618197067vitejs.png"
          alt="Vite"
        />
        <img
          className={styles.photo}
          src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Flogos-3%2F600%2FReact.js_logo-512.png"
          alt="React"
        />
        <img
          className={styles.photo}
          src="https://getbootstrap.com.br/docs/4.1/assets/img/bootstrap-stack.png"
          alt="Bootstrap"
        />
      </div>
    </header>
  );
};
