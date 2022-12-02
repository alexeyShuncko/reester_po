import s from './Footer.module.css';
import logo from '../../../image/Vector.png';

const Footer = (props) => {
  return (
    <div className={s.container}>
      <div className={s.footerItem}>
        <div className={s.item1}>
          <div className={s.item1_1}>
            <img alt="Логотип" src={logo} style={{ marginBottom: '20px' }} />
            <div className={s.text1}>
              Открытое акционерное общество «Реестр ПО» начало практическую
              деятельность с 1 марта 2014г
            </div>
            <div className={s.dev}>Разработчик</div>
            <div className={s.dev1}>
              ОАО «Агентство сервисизации и реинжиниринга»
            </div>
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
            <div className={s.time}>
              Ежедневно с 8.00 до 19.00, за исключением выходных (суббота,
              воскресенье) и праздничных дней.
            </div>
            <div className={s.numTel}>+375 25 111 22 33 </div>
            <div className={s.numTel}>+375 29 222 44 55</div>
            <div className={s.numTel}>ReestrPOsupport@mail.ru</div>
          </div>
          <div>
            <div className={s.contact}>Контакты</div>
            <div className={s.numTel}>+375 25 111 22 33 </div>
            <div className={s.numTel}>+375 29 222 44 55</div>
            <div className={s.numTel}>ReestrPO@mail.ru</div>
            <div className={s.numAdress}>
              220004 г. Минск, ул. Карла Маркса, 38
            </div>
            <a href="/" className={s.linkContact}>
              Связаться с поддержкой
            </a>
          </div>
        </div>
      </div>
      <div className={s.lineFoo}></div>
      <div className={s.copyr}>
        © Copyright 2022 — ОАО «РеестрПО». Все права защищены.
      </div>
    </div>
  );
};
export default Footer;
