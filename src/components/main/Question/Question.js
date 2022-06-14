import s from './Question.module.css';

import plus from '../../../image/plus.svg'
import { useState } from 'react';


const Question = (props) => {

const [edit, setEdit] = useState(false)


    const plusRotaite =(e)=> {
       
        
        if (edit) {
            document.getElementById('plus').style.transform =  'rotate(180deg)'
            setEdit(false)
        }
        else {
            document.getElementById('plus').style.transform =  'rotate(45deg)'
            setEdit(true)
        }

    }


    const arr = [
       
        {name: 'Связь с оператором реестра', id: 'plus2'},
        {name: 'Как подать заявление на включение программного обеспечения в реестр', id: 'plus3'},
        {name: 'Где можно подать заявление', id: 'plus4'},
        {name: 'Как узнать мне причину отказа', id: 'plus5'},
        {name: 'Что делать, если Вам отказали', id: 'plus6'},
        {name: 'Изменение реестревой записи',id: 'plus7'},

    ]




    return (
        <div className={s.question}>
            <div className={s.docTitle}>Вопрос-ответ</div>
            <div className={s.questionList}>
               
                   
                        <div className={s.questionListItem} >
                        <img alt='' src={plus} className={s.plus} id='plus' 
                        style={{ marginRight: '10px' }} 
                        onClick={plusRotaite}></img>
                      Для подачи заявления необходимо подготовить
                        {
                            edit
                                ? <div className={s.listD}>
                                    <ol>
                                        <li>Данные для авторизации в личном кабинете</li>
                                        <li>Квалифицированный сертификат ключа
                                            проверки электронной подписи.</li>
                                        <li>Сведения, документы и материалы в соответствии
                                            с Методическими рекомендациями.</li>
                                        <li>Установить специализированное ПО для подписания
                                            документов электронной подписью. Подписание
                                            производится с использованием усиленной квалифицированной
                                            (отсоединяемой) электронной подписи.</li>
                                    </ol>
                                </div>
                                : null
                        }
                    </div>
                    
               
                   
                {arr.map(a=> {
                    return (
                        <div className={s.questionListItem} key={a.name}>
                        <img alt='' src={plus}   style={{ marginRight: '10px' }}></img>
                       {a.name}
                    </div>
                    )
                })
                   
                }
                
                
            </div>

        </div>



    )
}

export default Question;
