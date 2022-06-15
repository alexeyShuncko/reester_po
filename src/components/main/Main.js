import s from './Main.module.css';
import im1 from '../../image/im1.png'
import search from '../../image/search.svg'
import voronka from '../../image/voronka.svg'
import group from '../../image/group.svg'
import Table1 from './Table/Table';
import News from './News/News';
import Document from './Document/Document';
import Question from './Question/Question';
import { useState } from 'react';




const Main = (props) => {

    const [edit, setEdit] = useState(false)
   
    const newsEdit =()=> {
        setEdit(true)
    }
     const newsEditFalse =()=> {
        setEdit(false)
    }

    const buttonMess = () => {
        alert(`Вы нажали "Искать" ...`)
    }
    return (
        <div className={s.container}>
        
            <div className={s.mainItem1}>
                <div>
                    <div className={s.reestr}>РЕЕСТР
                        ПРОГРАММНОГО
                        ОБЕСПЕЧЕНИЯ</div>
                    <div className={s.title}>Единый реестр программ для электронных
                        вычислительных машин и баз данных</div>
                    <div className={s.PO}>Включено ПО в реестр: <span className={s.colorNum}>13 438</span><br></br>
                        Правообладателей: <span className={s.colorNum}>4 272</span></div>
                    <div className={s.inpBut}>
                        <img alt='' src={search} className={s.searchImg}></img>
                        <input placeholder='Искать реестр...' />
                        <button onClick={buttonMess}>Искать</button>
                    </div>
                </div>
                <img alt='' src={im1} className={s.im1}></img>
            </div>
            <div className={s.mainItem2}>
                <div className={s.icons}>
                    <div className={s.titleReestr}>Реестры</div>
                    <img alt='' src={voronka} className={s.voronka}></img>
                    <img alt='' src={group} className={s.group}></img>
                </div>
              
                <Table1 />
             
            </div>
           
               
            <div className={s.mainItem3}>
                <div className={s.newsTitle}>Новости реестра</div> 
                <News edit={edit}/>
                <div className={s.qqq}>
                {!edit
                    ?<button className={s.butNews} onClick={newsEdit}>Показать все</button>
                    :<button className={s.butNews} onClick={newsEditFalse}>Убрать</button>
                }
                </div>
             
                </div>
              
            <div className={s.mainItem2}>
            <Document />
            </div>
            <div className={s.mainItem3}>
                <Question />
            </div>
        </div>
    )
}

export default Main;
