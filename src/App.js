import "./App.css";
import { createLogger } from "./Logger/createLogger";

function App() {
  const logger = createLogger();

  return <div className="App">A custom functional logger implementation.</div>;
}

export default App;
