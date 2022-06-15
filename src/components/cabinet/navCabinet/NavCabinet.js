
import s from './NavCabinet.module.css';
import { NavLink } from 'react-router-dom';
import coll from '../../../image/item.svg'
import collb from '../../../image/itemBlue.svg'
import reestr from '../../../image/reestr.svg'
import myb from '../../../image/myb.svg'
import my from '../../../image/my.svg'
import meta from '../../../image/meta.svg'
import close from '../../../image/close.svg'
import arr from '../../../image/arrDo.svg'
import downArr from '../../../image/arrow.svg'

import exit from '../../../image/exit.svg'
import { useEffect } from 'react';
import { DateFunc } from '../../help/DateFunc';


const NavCabinet = (props) => {

    

    useEffect (()=> {
        document.getElementById('Мои данные').focus()
    }, [])

   

    let settingArr = [
        { name: 'Мои данные', path: '/cabinet/', img: my, imgBlue: myb },
        { name: 'Уведомления', path: '/cabinet/notifications', img: coll,imgBlue: collb },
        { name: 'Реестры', path: '/cabinet/reestrs', img: reestr, imgBlue: downArr },
        { name: 'Метаданные', path: '/cabinet/metaData', img: meta, imgBlue: downArr },
        { name: 'Безопасность', path: '/cabinet/security', img: close, imgBlue: downArr },
        { name: 'Мои загрузки', path: '/cabinet/downloads', img: arr, imgBlue: downArr },
        { name: 'Выход', path: '/', img: exit },
    ]


    const colorBlue =(e)=> {
      if (e.currentTarget.innerText === 'Выход') {
        const timer = DateFunc(new Date())
        props.addAut(false)
        props.updateNot(`Вы вышли из системы ${timer}`)
      }
        props.setSelect(e.currentTarget.innerText)
    }


    

    return (
        <div className={s.buttons}>
            {
                settingArr.map(a =>
                    <div key={a.name}>
                        <NavLink to={a.path}   >
                            <button size='large' id={a.name}
                            onClick={colorBlue} 
                            
                            className={ props.select === a.name ? s.navActive : s.navDiv}>

                                <div style={{ display: 'flex' }} >
                                    <img alt='' src={
                                        props.select !== a.name ? a.img : a.imgBlue
                                    }
                                        style={{ marginRight: '20px', }} ></img>
                                    {a.name === 'Выход'
                                        ? <span 
                                            style={{
                                                color: `var(--second-red)`,
                                                fontWeight: '500',
                                                fontSize: 18
                                            }}>
                                            {a.name}</span>
                                        :
                                        a.name}

                                </div>
                            </button>
                        </NavLink>
                    </div>
                )
            }
        </div>
    )
}

export default NavCabinet



