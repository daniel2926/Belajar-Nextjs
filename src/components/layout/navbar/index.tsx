import styles from "./Navbar.module.css"
const bar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default bar;
