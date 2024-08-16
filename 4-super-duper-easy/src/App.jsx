import "./App.css";

function App() {

  
  function calculate(value) {
    if (typeof value === "string") {
      return "Error";
    } else {
      return value * 50 + 6;
    }
  }

  console.log(calculate(4));
  console.log(calculate(10));
  console.log(calculate("test"));
  console.log(calculate(0));

  return <></>;
}

export default App;
