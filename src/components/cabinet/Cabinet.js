
import s from './Cabinet.module.css';

import { Routes, Route } from 'react-router-dom';
import NavCabinet from './navCabinet/NavCabinet';
import MyData from './myData/MyData';
import Notifications from './notifications/Notifications';
import Reestrs from './reestrs/Reestrs';
import MetaData from './metaData/MetaData';
import Security from './security/Security';
import Downloads from './downloads/Downloads';





const Cabinet = (props) => {


    return (

        <div className={s.containerCabinet}>
            <div className={s.titleCab}>Личный кабинет</div>
            <div style={{display: 'flex'}}>
            <NavCabinet />
            <Routes>
        <Route path='/' element={<MyData />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/reestrs' element={<Reestrs />} />
        <Route path='/metaData' element={<MetaData />} />
        <Route path='/security' element={<Security />} />
        <Route path='/downloads' element={<Downloads />} />

      </Routes>
            </div>
            
        </div>
        

    )
}

export default Cabinet;
