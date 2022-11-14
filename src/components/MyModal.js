import React from "react";



const ModalForm = ({setModal }) => {


    const handler = (e) => {
        if (e.target === e.currentTarget) {
            setModal(false)
        }
    }

    return (
        <div className='modal' onClick={handler}>
            <div className='content' >
                <div>Форма отправлена успешно!</div>
                <button onClick={() => setModal(false)}
                >Закрыть</button>
            </div>
        </div>
    )

}
export default ModalForm