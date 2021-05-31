import './App.css';
import Header from "./components/header"
import Main from "./components/main";

function App() {
  return (
    <div className="App">
        <Header title={"workLog"}/>
        <Main className={"container mx-auto px-4"}/>
    </div>
  );
}

export default App;
