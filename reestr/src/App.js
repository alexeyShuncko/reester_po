import s from './App.module.css';
import Main from './components/main/Main';
import logo from './image/Vector.png'
import search from './image/search.png'
import calendar from './image/calendar.png'
import item from './image/item.png'
import user from './image/user.png'
import arrow from './image/arrow.png'




function App() {


  return (
    <>
      <header>
        <img alt='' src={logo} className={s.logo}></img>


        <div className={s.search} >
          <img alt='' src={search} className={s.searchImg}></img>
          <span>Поиск</span>
        </div>

        <div className={s.room}>
          <div className={s.calendar}></div>
          <img alt='' src={calendar} className={s.calendarImg} ></img>
          <div className={s.item}> </div>
          <img alt='' src={item} className={s.itemImg} ></img>

          <span className={s.num}>4</span>
          <div className={s.line}></div>



          <img alt='' src={user} className={s.user}></img>
          <button className={s.userRoom}> Вход в аккаунт</button>
          <img alt='' src={arrow} className={s.arrow} ></img>
        </div>



      </header>
      <Main />
      <footer>
        <div className={s.footerItem}>
          <div className={s.item1}>
            <div className={s.item1_1}>
              <img alt='' src={logo} style={{ marginBottom: '20px' }}></img>
              <div className={s.text1}>Открытое акционерное общество
                «Реестр ПО» начало практическую
                деятельность с 1 марта 2014г</div>
              <div className={s.dev}>Разработчик</div>
              <div className={s.dev1}>ОАО «Агентство сервисизации и реинжиниринга»</div>
              <div className={s.dev2}>Минск, улица Клары Цеткин, 24</div>
            </div>
            <div className={s.item1_2}>
              <div className={s.inform}>Информация</div>
              <div className={s.informItem}>Реестры</div>
              <div className={s.informItem}>Новости</div>
              <div className={s.informItem}>Документы</div>
              <div className={s.informItem}>Вопросы</div>
            </div>

          </div>

          <div className={s.item2}>
            <div>
              <div className={s.tehhelp}>Техническая поддержка</div>
              <div className={s.time}>Ежедневно с 8.00 до 19.00,
                за исключением выходных (суббота, воскресенье) и праздничных дней.</div>
              <div className={s.numTel}>+375 25 111 22 33 </div>
              <div className={s.numTel}>+375 29 222 44 55</div>
              <div className={s.numTel}>ReestrPOsupport@mail.ru</div>

            </div>
            <div>
            <div className={s.contact}>Контакты</div>
            <div className={s.numTel}>+375 25 111 22 33 </div>
              <div className={s.numTel}>+375 29 222 44 55</div>
              <div className={s.numTel}>ReestrPO@mail.ru</div>
              <div className={s.numAdress}>220004 г. Минск, ул. Карла Маркса, 38</div>
              <div className={s.linkContact}>Связаться с поддержкой</div>
            </div>
          </div>

        </div>
        <div className={s.lineFoo}></div>
        <div className={s.copyr}>
          © Copyright 2022 — ОАО «РеестрПО». Все права защищены.
        </div>
      </footer>
    </>

  );
}

export default App;
