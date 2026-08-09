import Button from "./components/Button"; 
import "./App.css";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <Button text="Click Me" type="button" onClick={handleClick} />
  );
}

export default App;