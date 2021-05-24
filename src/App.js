import './App.css';
import Header from "./components/header"
import Main from "./components/main";
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header title={"workLog"}/>
        <Main className={"container mx-auto px-4"}/>
    </div>
  );
}

export default App;
