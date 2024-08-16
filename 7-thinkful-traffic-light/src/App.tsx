import './App.css'

function App() {

  function updateLight(current: string): string {
    switch (current) {
      case 'green':
        return 'yellow';
      case 'yellow':
        return 'red';
      case 'red':
        return 'green';
      default:
        throw new Error('Invalid traffic light state');
    }
  }

  console.log(updateLight('green')); 
  console.log(updateLight('yellow'));
  console.log(updateLight('red'));   


  return (
    <>

    </>
  )
}

export default App
