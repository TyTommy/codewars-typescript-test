import './App.css'

function App() {

  function DNAtoRNA(dna: string): string {
    return dna.replace(/T/g, 'U');
  }

  console.log(DNAtoRNA("GCAT"));
  console.log(DNAtoRNA("GCTA"));
  console.log(DNAtoRNA("TTTT"));
  console.log(DNAtoRNA("GCCG"));


  return (
    <>

    </>
  )
}

export default App
