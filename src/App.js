import './App.css';
import { createLogger } from './Logger/createLogger';

function App() {
  const logger = createLogger()

  logger.debug("check it out", "data")

  return (
    <div className="App">
      A custom functional logger implementation.
    </div>
  );
}

export default App;
