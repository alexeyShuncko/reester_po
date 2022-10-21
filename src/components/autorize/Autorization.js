import s from './Autorization.module.css';
import ret from '../../image/ret.svg';
import main from '../../image/Главная.svg';
import login from '../../image/login.svg';
import { Button, Checkbox, Form, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { DateFunc } from './../help/DateFunc';




const Autorization = (props) => {

    const [form] = Form.useForm()

    let navigate = useNavigate()
    const retMain = () => navigate('/')


    const onFinish = (values) => {

        if (values.username !== props.users.name) {
            form.setFields([{ errors: [`Неверное имя пользователя`], name: 'username' }])
            let elem = document.getElementById('nameLog')
            elem.style.border = `1px solid var(--second-red)`
            elem.previousSibling.style.color = `var(--second-red)`
            elem.style.color = `var(--second-red)`
        }
        else if (values.password !== props.users.pass) {
            form.setFields([{ errors: [`Неправильный пароль`], name: 'password' }])
            let elem = document.getElementById('namePass')
            elem.style.border = `1px solid var(--second-red)`
            elem.previousSibling.style.color = `var(--second-red)`
            elem.style.color = `var(--second-red)`
        }
        else {
            const timer = DateFunc(new Date())
            props.updateNot(`Вы вошли в систему  ${timer}`)
            retMain()
            props.addAut(true)
        }
    }


    const validator = (_, value) => {
        let name = document.getElementById('nameLog')
        let loginImg = document.getElementById('loginImg')

        if (value === props.users.name) {
            name.style.border = `1px solid var(--second-green)`
            name.previousSibling.style.color = `var(--primary-grey)`
            loginImg.style.visibility = 'visible'
            return Promise.resolve()
        }
        else {
            name.style.border = `1px solid var(--primary-blue)`
            name.previousSibling.style.color = `var(--primary-blue)`
            name.style.color = `var(--primary-grey)`
            loginImg.style.visibility = 'hidden'
            return Promise.resolve()
        }
    }

    const validatorPass = (_, value) => {
        let namePass = document.getElementById('namePass')
        let passImg = document.getElementById('passImg')

        if (value === props.users.pass) {
            namePass.style.border = `1px solid var(--second-green)`
            namePass.previousSibling.style.color = `var(--primary-grey)`
            namePass.style.color = `var(--second-green)`
            passImg.style.visibility = 'visible'
            return Promise.resolve()
        }
        else {
            namePass.style.border = `1px solid var(--primary-blue)`
            namePass.previousSibling.style.color = `var(--primary-blue)`
            namePass.style.color = `var(--primary-grey)`
            passImg.style.visibility = 'hidden'
            return Promise.resolve()
        }
    }


    return (

        <div className={s.containerAuto}>
            <div style={{ display: 'flex', marginTop: '40px', }} onClick={retMain}>
                <img alt='Стрелка' src={ret} className={s.ret} style={{ marginRight: '10px', cursor: 'pointer' }} />
                <img alt='Главная' src={main} className={s.main} style={{ cursor: 'pointer' }} />
            </div>
            <div className={s.formAuto}>
                <div className={s.titleAuto}>Авторизация</div>
                <Form
                    form={form}
                    name='autor'
                    onFinish={onFinish}
                    autoComplete='off'>
                    <Form.Item
                        name='username'
                        rules={[{ validator: validator }]}
                        style={{ marginBottom: 20 }}
                    >
                        <div>
                            <div className={s.lab} >Имя</div>
                            <input id='nameLog' className={s.inpMy} placeholder='Введите имя'></input>
                            <img alt='Логин' src={login} id='loginImg' className={s.login} />
                        </div>
                    </Form.Item>
                    <Form.Item
                        name='password'
                        rules={[{ validator: validatorPass }]}
                    >
                        <div>
                            <div className={s.lab}>Пароль</div>
                            <input type={'password'} id='namePass'
                                className={s.inpMy} placeholder='Введите пароль'></input>
                            <img alt='Пароль' src={login} id='passImg' className={s.login} />
                        </div>
                    </Form.Item>
                    <Form.Item
                        name='remember'
                        valuePropName='checked'>
                        <Checkbox style={{
                            fontWeight: '500',
                            fontSize: 16,
                            color: `var(--interface-text-2)`
                        }}>Запомнить меня на этом компьютере</Checkbox>
                    </Form.Item>
                    <Form.Item
                        name='but'
                        style={{ marginBottom: 20 }}>
                        <button
                            className={s.butAut}
                            type={'submit'}>
                            Вход
                        </button>
                    </Form.Item>
                </Form>
                <a href='/' className={s.linkAuto}>Забыли свой пароль?</a>
                <Space direction='vertical' size='middle'>
                    <Button style={{
                        width: 430,
                        height: 56,
                        borderRadius: 5,
                        textDecoration: 'underline'
                    }}><a href='/' className={s.buttonLinc}>
                            Авторизация с использованием ЕС ИФЮЛ</a></Button>
                    <Button style={{
                        width: 430,
                        height: 56,
                        borderRadius: 5,
                        textDecoration: 'underline',
                        marginBottom: 40
                    }}>
                        <a href='/' className={s.buttonLinc}>
                            Авторизация с использованием МСИ
                        </a></Button>
                </Space>
                <div className={s.akk}>У вас нет аккаунта?</div>
                <a href='/' className={s.clickMe}>Нажмите сюда, чтобы создать</a>
            </div>
        </div>
    )
}

export default Autorization;
