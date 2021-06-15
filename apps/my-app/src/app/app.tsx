import { useState } from 'react';
import styles from './app.module.scss';
import PerformanceModal from './views/PerformanceModal';

export function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.app}>
      <header className="flex">
        <h1>Welcome to my-app!</h1>
      </header>
      <button onClick={() => setVisible(!visible)}>Click me</button>
      <PerformanceModal visible={visible} setVisible={setVisible} />
    </div>
  );
}

export default App;
