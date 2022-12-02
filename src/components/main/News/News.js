import s from './News.module.css';
import foto1 from '../../../image/foto1.png';
import calendar from '../../../image/calendar.svg';
import foto2 from '../../../image/foto2.png';
import foto3 from '../../../image/foto3.png';
import foto4 from '../../../image/foto4.png';
import foto5 from '../../../image/foto5.png';

const News = ({ edit }) => {
  const arrData = [
    {
      img: foto1,
      title: 'Технические работы 30.05.2022',
      date: '30.05.2022',
      descript:
        'В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...',
    },
    {
      img: foto2,
      title: 'Изменение справочника',
      date: '28.05.2022',
      descript:
        'Обращаем внимание, что с 28.05.2022 внесены изменения в справочник "Дей...',
    },
    {
      img: foto1,
      title: 'Технические работы 26.05.2022',
      date: '26.05.2022',
      descript:
        'В связи с проведением технических работ 26.05.2022 с 21:00 могут наблюдаться пер...',
    },

    {
      img: foto3,
      title: 'Лицензирование в Беларуси',
      date: '25.05.2022',
      descript:
        'Лицензирование затрагивает отдельные виды деятельности в Республике Беларус...',
    },
    {
      img: foto4,
      title: 'Тестирование системы новостей Ед...',
      date: '20.05.2022',
      descript: 'Тестирование системы новостей ЕРЛ.',
    },
    {
      img: foto5,
      title: 'Обновление версии реестра ПО',
      date: '18.05.2022',
      descript:
        'В новой версии доступны новые функции, которые упрощают использование сервис...',
    },
    {
      img: foto1,
      title: 'Технические работы 26.05.2022',
      date: '26.05.2022',
      descript:
        'В связи с проведением технических работ 26.05.2022 с 21:00 могут наблюдаться пер...',
    },

    {
      img: foto3,
      title: 'Лицензирование в Беларуси',
      date: '25.05.2022',
      descript:
        'Лицензирование затрагивает отдельные виды деятельности в Республике Беларус...',
    },
    {
      img: foto4,
      title: 'Тестирование системы новостей Ед...',
      date: '20.05.2022',
      descript: 'Тестирование системы новостей ЕРЛ.',
    },
  ];

  const data = edit ? arrData : arrData.slice(0, 6);

  return (
    <div className={s.news}>
      {data.map((a, index) => {
        return (
          <div key={index} className={s.itemNews}>
            <img src={a.img} alt="Фото" />
            <div className={s.nameNews}>{a.title}</div>
            <div className={s.dateNews}>
              <img src={calendar} alt="Календарь" />
              {a.date}
            </div>
            <div className={s.descrNews}>{a.descript}</div>
          </div>
        );
      })}
    </div>
  );
};

export default News;
