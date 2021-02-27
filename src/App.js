import logo from "./logo.svg";
import "./App.css";
import AOS from "aos";
import Recipe from "./components/Recipe";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div class="rw-words rw-words-1">
          <span>cats 😺</span>
          <span>squirrels 🧑‍💻</span>
          <span>dogs 🔥</span>
        </div>
        <Recipe />
        <Recipe />

        <span id="bottom">Bottom</span>
      </header>
    </div>
  );
}

AOS.init();
export default App;
