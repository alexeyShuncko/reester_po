import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import s from './Header.module.css';
import { ReactComponent as ItemGrey } from '../../../image/item.svg';
import logo from '../../../image/Vector.png';
import search from '../../../image/search.svg';
import calendar from '../../../image/calendar.svg';
import user from '../../../image/user.svg';
import arrow from '../../../image/arrow.svg';

const Header = ({ setSelect, reester }) => {
  const navigate = useNavigate();
  const styleBtn = {
    width: 280,
    height: 58,
    border: 'none',
    color: `var(--primary-grey)`,
    fontWeight: '500',
    fontSize: 16,
    boxShadow: 'none',
  };

  const autorize = (e) => {
    if (e.currentTarget.innerHTML.includes('Вход в аккаунт')) {
      navigate('/autorize');
    } else {
      navigate('/cabinet/');
      setSelect('Мои данные');
    }
  };

  const retMain = () => navigate('/');

  const redirect = () => {
    navigate('/cabinet/notifications');
    setSelect('Уведомления');
  };

  return (
    <div className={s.head}>
      <img alt="Логотип" src={logo} className={s.logo} onClick={retMain} />
      <div className={s.search}>
        <img alt="Поиск" src={search} className={s.searchImg} />
        <input placeholder="Поиск" />
      </div>
      <div className={s.room}>
        <div className={s.calendar}></div>
        <img alt="Календарь" src={calendar} className={s.calendarImg} />
        {!reester.autorize ? (
          <div>
            <div className={s.item}> </div>
            <ItemGrey className={s.itemImg} />
          </div>
        ) : (
          <div>
            <div className={s.item}> </div>
            <ItemGrey
              style={{ fill: 'var(--primary-blue)' }}
              onClick={redirect}
              className={s.itemImg}
            />
            <span className={s.num}>{reester.notifications.length}</span>
          </div>
        )}
        <div className={s.line}></div>
        <Button onClick={autorize} style={styleBtn}>
          {!reester.autorize ? (
            <>
              <img alt="Пользователь" src={user} className={s.user} />
              Вход в аккаунт
            </>
          ) : (
            <>
              <img alt="Пользователь" src={reester.foto} className={s.user} />
              {reester.users.name} {reester.users.famili}
            </>
          )}
          <img alt="Стрелка" src={arrow} className={s.arrow} />
        </Button>
      </div>
    </div>
  );
};
export default Header;
