import eye from '../../../image/eye.svg'
import arrow from '../../../image/arrow.svg'
import s from './MyData.module.css';
import { useState } from 'react';
import { Form } from 'antd';
import { DateFunc } from '../../help/DateFunc';







const MyData = (props) => {



    const [edit, setEdit] = useState(false)

    const pass = (e) => {
        let typePass = document.getElementById(e.target.previousSibling.id).type
       
        if (typePass !== 'text') {
            document.getElementById(e.target.previousSibling.id).type = 'text'
        }
        else {
            document.getElementById(e.target.previousSibling.id).type = 'password'
        }

    }

    const rotaitArr = (e) => {

        if (!edit) {
            document.getElementById('arrSelect').style.transform = 'rotate(180deg)'
            setEdit(true)
        }
        else {
            document.getElementById('arrSelect').style.transform = ''
            setEdit(false)
        }

    }

    const rotaitArrSity = (e) => {

        if (!edit) {
            document.getElementById('arrSelectSity').style.transform = 'rotate(180deg)'
            setEdit(true)
        }
        else {
            document.getElementById('arrSelectSity').style.transform = ''
            setEdit(false)
        }

    }

    const onFinish =(values)=> {
        const timer = DateFunc(new Date())
        props.updateNot(`Вы сохранили изменения ${timer}`)
        props.addUsers(values)
    }



    return (

        <div className={s.containerCabinet}>

            <div className={s.titleMy}>
                <img alt='' src={props.foto}  ></img>
                <span className={s.hello}>Здравствуй, {props.users.name}!</span>
            </div>
            <div className={s.lineMy}></div>
            <div className={s.data}>Основные данные</div>

            <Form 
            onFinish={onFinish}
            initialValues={
                {
                    name: props.users.name,
                    famili:  props.users.famili,
                    faser: props.users.faser,
                    country: props.users.country,
                    sity:props.users.sity,
                    tel:props.users.tel,
                    pass: props.users.pass,

                }
            }>



                <div style={{ display: 'flex' }}>
                    <Form.Item
                        name="name"
                        style={{ marginBottom: 20 }}>
                        <div>
                            <div className={s.labelInput}>Имя</div>
                            <input className={s.inpMy} defaultValue={props.users.name}></input>
                        </div>
                    </Form.Item>
                    <Form.Item
                        name="famili"
                        style={{ marginBottom: 20 }}>
                        <div>
                            <div className={s.labelInput}>Фамилия</div>
                            <input className={s.inpMy} defaultValue={props.users.famili}></input>
                        </div>
                    </Form.Item>


                </div>
                <div style={{ display: 'flex' }}>
                    <Form.Item
                        name="faser"
                        style={{ marginBottom: 20 }}>
                        <div>
                            <div className={s.labelInput}>Отчество</div>
                            <input className={s.inpMy} defaultValue={props.users.faser}></input>
                        </div>
                    </Form.Item>

                    <Form.Item
                        name="country"
                        style={{ marginBottom: 20 }}>
                        <div>
                            <div className={s.labelInput}>Страна</div>
                            <div style={{ position: 'absolute' }} onClick={rotaitArr}>
                                <select className={s.selectMy} defaultValue={props.users.country} >
                                    <option>Беларусь</option>
                                    <option>Литва</option>
                                    <option>Польша</option>
                                </select>
                                <img alt='' src={arrow} id='arrSelect' className={s.arrMy} ></img>
                            </div>

                        </div>
                    </Form.Item>


                </div>
                <div style={{ display: 'flex' }}>
                    <Form.Item
                        name="sity"
                        style={{ marginBottom: 20 }}>
                        <div>
                            <div className={s.labelInput}>Город</div>
                            <div style={{ position: 'relative' }} onClick={rotaitArrSity}>
                                <select className={s.selectMy} defaultValue={props.users.sity}>
                                    <option>Минск</option>
                                    <option>Молодечно</option>
                                    <option>Брест</option>
                                </select>
                                <img alt='' src={arrow} id='arrSelectSity' className={s.arrMy} ></img>
                            </div>
                        </div>
                    </Form.Item>

                    <Form.Item
                        name="tel"
                        style={{ marginBottom: 20 }}>
                        <div>
                            <div className={s.labelInput}>Мобильный телефон</div>
                            <input type={'tel'} className={s.inpMy} defaultValue={props.users.tel}></input>
                        </div>
                    </Form.Item>


                </div>
                <div className={s.lineMy}></div>
                <div className={s.data}>Пароль</div>
                <div style={{ display: 'flex' }}>

                    <Form.Item
                        name="pass"
                        style={{ marginBottom: 20 }}>
                        <div>
                            <div className={s.labelInput}>Новый пароль</div>
                            <div className={s.block}>
                                <input type={'password'} id='passNew' className={s.inpMy} defaultValue={props.users.pass}></input>
                                <img alt='' src={eye} className={s.eye} onClick={pass}></img>
                            </div>

                        </div>
                    </Form.Item>
                    <Form.Item
                        name="passTu"
                        style={{ marginBottom: 20 }}>
                        <div>
                            <div className={s.labelInput}>Подтверждения пароля</div>
                            <div className={s.block}>
                                <input type={'password'} id='pass2' className={s.inpMy} defaultValue={props.users.pass}></input>
                                <img alt='' src={eye} className={s.eye} onClick={pass}></img>
                            </div>
                        </div>
                    </Form.Item>
                </div>
                <div className={s.lineMy}></div>
                <Form.Item
                        style={{ marginBottom: 20 }}>
                <button className={s.butMy}>Сохранить</button>
                </Form.Item>
            </Form>


        </div>


    )
}

export default MyData;
