import { useState } from 'react';
import './App.scss';

function App() {


  const [value, setValue] = useState('')


 const mySubmit =(e)=> {
   e.preventDefault()
   console.log(value);
 }

  return (
    <form className='container' onSubmit={mySubmit}>
      <input placeholder='Ваш номер...' value={value} onChange={(e)=> setValue(e.target.value)} />
      <button ><span>Заказать</span></button>
    </form>
  );
}

export default App;
