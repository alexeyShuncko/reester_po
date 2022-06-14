
import s from './NavCabinet.module.css';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import coll from '../../../image/item.svg'
import reestr from '../../../image/reestr.svg'
import my from '../../../image/my.svg'
import meta from '../../../image/meta.svg'
import close from '../../../image/close.svg'
import arr from '../../../image/arr.svg'
import exit from '../../../image/exit.svg'


const NavCabinet = (props) => {

    let settingArr = [
        { name: 'Мои данные', path: '/cabinet/', img: my },
        { name: 'Уведомления', path: '/cabinet/notifications', img: coll },
        { name: 'Реестры', path: '/cabinet/reestrs', img: reestr },
        { name: 'Метаданные', path: '/cabinet/metaData', img: meta },
        { name: 'Безопасность', path: '/cabinet/security', img: close },
        { name: 'Мои загрузки', path: '/cabinet/downloads', img: arr },
        { name: 'Выход', path: '/', img: exit },
    ]

    return (
        <div className={s.buttons}>
            {
                settingArr.map(a =>
                    <div className={s.navNewsitem} key={a.name}>
                        <NavLink to={a.path} >
                            <Button size='large' style={{
                                width: 270,
                                height: 72
                            }}>
                                <div style={{ display: 'flex' }}>
                                    <img alt='' src={a.img} ></img>
                                    {a.name === 'Выход'
                                        ? <span
                                            style={{
                                                marginLeft: '20px',
                                                color: `var(--second-red)`,
                                                fontWeight: '500',
                                                fontSize: 18,
                                                
                                            }}>
                                            {a.name}</span>
                                        : <a href='a'
                                        className={s.itemLinck}
                                            style={{
                                                marginLeft: '20px',
                                                
                                                // fontWeight: '500',
                                                // fontSize: 18,
                                            }}>
                                            {a.name}</a>
                                    }

                                </div>
                            </Button>
                        </NavLink>
                    </div>
                )
            }
        </div>
    )
}

export default NavCabinet



