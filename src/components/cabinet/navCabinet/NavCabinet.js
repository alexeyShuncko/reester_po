import s from './NavCabinet.module.css';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Coll } from '../../../image/item.svg';
import { ReactComponent as Reestr } from '../../../image/reestr.svg';
import { ReactComponent as My } from '../../../image/my.svg';
import { ReactComponent as Meta } from '../../../image/meta.svg';
import { ReactComponent as Secur } from '../../../image/close.svg';
import { ReactComponent as Load } from '../../../image/arrDo.svg';
import { ReactComponent as Exit } from '../../../image/exit.svg';
import { useEffect } from 'react';
import { DateFunc } from '../../help/DateFunc';


const NavCabinet = (props) => {

    useEffect (()=> {
        document.getElementById('Мои данные').focus()
    }, [])

    const settingArr = [
        { name: 'Мои данные', path: '/cabinet/', 
        img: <My className={s.svg} />, 
        imgBlue:<My className={s.logoSvg} /> },
        { name: 'Уведомления', path: '/cabinet/notifications', 
        img: <Coll className={s.svg} />,
        imgBlue: <Coll className={s.logoSvg} /> },
        { name: 'Реестры', path: '/cabinet/reestrs', 
        img:  <Reestr className={s.svg} />,
        imgBlue: <Reestr className={s.logoSvg} />  },
        { name: 'Метаданные', path: '/cabinet/metaData', 
        img: <Meta className={s.svg} />, 
        imgBlue: <Meta className={s.logoSvg}/> },
        { name: 'Безопасность', path: '/cabinet/security', 
        img: <Secur className={s.svg}/>, 
        imgBlue: <Secur className={s.logoSvg}/> },
        { name: 'Мои загрузки', path: '/cabinet/downloads', 
        img: <Load className={s.svg}/>, 
        imgBlue: <Load className={s.logoSvg}/> },
        { name: 'Выход', path: '/', 
        img: <Exit  style={{fill: `var(--second-red)`,marginRight: '20px'}}/>,
        imgBlue: <Exit /> }, 
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
                            <button 
                            size='large' 
                            id={a.name}
                            onClick={colorBlue} 
                            className={ props.select === a.name ? s.navActive : s.navDiv}>

                                <div style={{ display: 'flex' }} >
                                    {
                                         props.select !== a.name
                                         ? a.img
                                         : a.imgBlue 
                                    }
                                    {a.name === 'Выход'
                                        ? <span 
                                            style={{
                                                color: `var(--second-red)`,
                                                fontWeight: '500',
                                                fontSize: 18
                                            }}>
                                            {a.name}</span>
                                        : a.name}
                                </div>
                            </button>
                        </NavLink>
                    </div>
                )
            }
        </div>
    )
}

export default NavCabinet;



