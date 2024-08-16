import './App.css'

function App() {


  function expressionsMatter(a: number, b: number, c: number): number {
    const results = [
      a + b + c,
      a * b * c,
      a * (b + c),
      (a + b) * c,
      a + b * c,
      a * b + c,
    ];
  
    return Math.max(...results);
  }
  
  console.log(expressionsMatter(1, 2, 3)); 
  console.log(expressionsMatter(1, 1, 1)); 
  console.log(expressionsMatter(9, 1, 1)); 
  

  return (
    <>
     
    </>
  )
}

export default App
