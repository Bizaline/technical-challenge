import styles from './app.module.scss';

export function App() {
  return (
    <div className={styles.app}>
      <header className="flex">
        <h1>Welcome to my-app!</h1>
      </header>
        <button onClick={()=> alert("hello")}>Click me</button>
    </div>
  );
}

export default App;
