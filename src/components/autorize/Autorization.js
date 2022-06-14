
import s from './Autorization.module.css';
import ret from '../../image/ret.svg'
import main from '../../image/Главная.svg'


import { Button, Checkbox, Form, Input, Space } from 'antd';
import { useNavigate } from 'react-router-dom';




const Autorization = (props) => {

    let navigate = useNavigate()
    const retMain =()=> {
        navigate('/')
      }

const onFinish =()=> {
    retMain()
}

    return (

        <div className={s.containerAuto}>
            <div style={{ display: 'flex', marginTop: '40px' }} onClick={retMain}>
                <img alt='' src={ret} className={s.ret} style={{ marginRight: '10px' }}></img>
                <img alt='' src={main} className={s.main}></img>
            </div>

            <div className={s.formAuto}>
                <div className={s.titleAuto}>
                    Авторизация
                </div>
                <Form
                    name="basic"
                    layout='vertical'
                    onFinish={onFinish}
                    autoComplete="off">

                    <Form.Item
                    
                        label="Имя"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуста, введите имя',
                            },
                        ]}
                        style={{
                            marginBottom: 20}}>
                        <Input  
                        placeholder="Введите имя"
                        className={s.nameInp}
                        style={{
                            backgroundColor: `var(--interface-input)`,
                            width: 430, 
                            height: 56,
                            borderRadius: 5 
                        }}/>
                    </Form.Item>

                    <Form.Item
                    
                        label="Пароль"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуста введите пароль',
                            },
                        ]}
                    >
                        <Input type='password' 
                        placeholder='Введите пароль'  
                        style={{
                            backgroundColor: `var(--interface-input)`,
                            width: 430, 
                            height: 56,
                            borderRadius: 5 
                        }}/>
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked">
                        <Checkbox style={{
                             fontWeight: '500',
                             fontSize: 16,
                            color: `var(--interface-text-2)`
                        }}>Запомнить меня на этом компьютере</Checkbox>
                    </Form.Item>

                    <Form.Item style={{
                        marginBottom: 20
                    }}>
                        <Button 
                       
                        type="primary" 
                        htmlType="submit" 
                        style={{
                            background: `var(--primary-blue)`,
                            width: 430, 
                            height: 56,
                             fontWeight: '700',
                             fontSize: 18,
                            color: `var(--primary-white)`,
                            borderRadius: 5 
                            
                        }}>
                            Вход
                        </Button>
                    </Form.Item>
                </Form>
                <a href='a' className={s.linkAuto}>Забыли свой пароль?</a>
                <Space direction='vertical' size='middle'>
                <Button  style={{
                            width: 430, 
                            height: 56,
                            borderRadius: 5,
                             textDecoration: 'underline'  
                        }}><a href='a' className={s.buttonLinc}>
                            Авторизация с использованием ЕС ИФЮЛ</a></Button>
                <Button  style={{
                            width: 430, 
                            height: 56,
                            borderRadius: 5,
                            textDecoration: 'underline',
                            marginBottom: 40  
                        }}>
                            <a href='a' className={s.buttonLinc}>
                            Авторизация с использованием МСИ
                                </a></Button>
                               
                </Space>
                <div className={s.akk}>У вас нет аккаунта?</div>
                                <a href='a' className={s.clickMe}>Нажмите сюда, чтобы создать</a>
            </div>
        </div>

    )
}

export default Autorization;
