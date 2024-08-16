import './App.css'

function App() {

  function shortLongShort(a: string, b: string): string {
    if (a.length < b.length) {
      return a + b + a;
    } else {
      return b + a + b;
    }
  }

  console.log(shortLongShort("1", "22"));  
  console.log(shortLongShort("22", "1"));  
  console.log(shortLongShort("", "22"));   
  console.log(shortLongShort("22", ""));   
  console.log(shortLongShort("", ""));   


  return (
    <>

    </>
  )
}

export default App
