import { useState } from 'react';
import './App.scss';
import ModalForm from './components/MyModal';

function App() {


  const [value, setValue] = useState('')
  const [edit, setEdit] = useState(false)
  const [modal, setModal] = useState(false)


  const mySubmit = (e) => {
    e.preventDefault()
    if (!value) {
      setEdit(true)
      document.querySelector('input').focus()
    }
    else {
      const data = {number: value}
      fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(res=> res.json())
      .then(data=> {
        setModal(true)
        setValue('')
      })
    }
  }


  const changeHandler = (e) => {
    setEdit(false)
    setValue(e.target.value)
  }

  return (
    <>
    <form className='container' onSubmit={mySubmit}>
      <input placeholder='Ваш номер...' value={value} onChange={changeHandler} />
      {edit &&
        <div className='message'>Поле не должно быть пустым!</div>
      }
      <button ><span>Заказать</span></button>
    </form>
    {modal && <ModalForm setModal={setModal} />}
    </>
    
  );
}

export default App;
