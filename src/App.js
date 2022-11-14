import { useState } from 'react';
import './App.scss';

function App() {


  const [value, setValue] = useState('')
  const [edit, setEdit] = useState(false)


  const mySubmit = (e) => {
    e.preventDefault()
    if (!value) {
      setEdit(true)
      document.querySelector('input').focus()
    }
    else {

    }
  }


  const changeHandler = (e) => {
    setEdit(false)
    setValue(e.target.value)
  }

  return (
    <form className='container' onSubmit={mySubmit}>
      <input placeholder='Ваш номер...' value={value} onChange={changeHandler} />
      {edit &&
        <div className='message'>Поле не должно быть пустым!</div>
      }
      <button ><span>Заказать</span></button>
    </form>
  );
}

export default App;
