import './App.css'

function App() {

  function doubleChar(str: string): string {
    let result = '';

    for (let char of str) {
      result += char.repeat(2);
    }

    return result;
  }

  console.log(doubleChar("String"));
  console.log(doubleChar("Hello World"));
  console.log(doubleChar("1234! "));


  return (
    <>

    </>
  )
}

export default App
