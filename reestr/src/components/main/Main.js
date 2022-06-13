import s from './Main.module.css';
import im1 from '../../image/im1.png'
import search from '../../image/search.png'
import voronka from '../../image/voronka.png'
import group from '../../image/group.png'
import { Table } from "antd";




const Main = (props) => {


    const arr = [
        {
            number: '#1', name: 'Система управления базами данных «Ред База Данных»', kod: '02.09',
            class: 'Системы управления базами данных', date: '29.01.2016', adress: 'Ссылка', кеу: 1
        },
        {
            number: '#2', name: '1С:Школа. Информатика, 11 класс»', kod: '04.11',
            class: 'Системы управления процессами организации', date: '29.01.2016', adress: 'Ссылка', кеу: 2
        },
        {
            number: '#3', name: '1С:Школа. Русский язык, 5–6 класс. Лексикология»', kod: '04.11',
            class: 'Информационные системы для решения специфических отраслевых задач', 
            date: '29.01.2016', adress: 'Ссылка', кеу: 3
        },
        {
            number: '#4', name: '1С:Комплексная автоматизация 8»', kod: '04.11',
            class: 'Системы управления процессами организации', date: '20.02.2016', adress: 'Ссылка', кеу: 4
        },
        {
            number: '#5', name: 'Электронный периодический справочник "Система ГАРАНТ"', kod: '04.15',
            class: 'Прикладное программное обеспечение общего назначения', date: '20.02.2016', 
            adress: 'Ссылка', кеу: 5
        },
        {
            number: '#6', 
            name: 'Система электронного документооборота и автоматизации бизнес-процессов «Е1 Евфрат»', 
            kod: '04.13',
            class: 'Системы сбора, хранения, обработки, анализа, моделирования и визуализации массивов данных',
             date: '11.03.2016', adress: 'Ссылка', кеу: 6
        },
        {
            number: '#7', name: 'ABBYY Lingvo', kod: '04.07',
            class: 'Лингвистическое программное обеспечение', date: '11.03.2016', adress: 'Ссылка', кеу: 7
        },
        {
            number: '#8', name: '1С-Битрикс24 (Компания)', kod: '04.03',
            class: 'Офисные приложения', date: '14.03.2016', adress: 'Ссылка', кеу: 8
        },
        {
            number: '#9', name: '1С-Битрикс24 (Проект+)', kod: '04.03',
            class: 'Системы управления проектами, исследованиями, разработкой, проектированием и внедрением',
             date: '14.03.2016', adress: 'Ссылка', кеу: 9
        },
        {
            number: '#10', name: '1С-Битрикс24 (Команда)', kod: '04.03',
            class: 'Системы сбора, хранения, обработки, анализа, моделирования и визуализации массивов данных',
             date: '14.03.2016', adress: 'Ссылка', кеу: 10
        },
        {
            number: '#11', name: 'Система управления базами данных «Ред База Данных»', kod: '02.09',
            class: 'Системы управления базами данных', date: '29.01.2016', adress: 'Ссылка', кеу: 11
        },
    ]



    const columns = [
        {
            title: 'Регистрационный номер',
            dataIndex: 'number',
            key: 'key',
            sorter: (a, b) => a - b,
            render: (text, record, index) =>
                <div style={{}}>{text}</div>
        },
        {
            title: 'Наименование програмного обеспечения',
            dataIndex: 'name',
            key: 'key',
            sorter: (a, b) => a.amount - b.amount,
            render: (text, record, index) =>
                <div style={{}}>{text}</div>
        },
        {
            title: 'Код класса',
            dataIndex: 'kod',
            key: 'key',
            render: (text, record, index) =>
                <div style={{}}>{text}</div>
        },
        {
            title: 'Класс програмного обеспечения',
            dataIndex: 'class',
            key: 'key',
            render: (text, record, index) =>
                <div style={{}}>{text}</div>
        },

        {
            title: 'Дата регистрации',
            dataIndex: 'date',
            key: 'key',
            render: (text, record, index) =>
                <div style={{}}>{text}</div>
        },
        {
            title: 'Адресс сайта',
            dataIndex: 'adress',
            key: 'key',
            render: (text, record, index) =>
                <a href='a' style={{ textDecoration: 'underline' }}>{text}</a>
        },

    ]
    const data = arr


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
                <Table
                    rowClassName={s.row}
                    columns={columns}
                    dataSource={data}
                    size="small"
                    // title={(data)=> data.style({color: 'green'})}
                    pagination={{
                        pageSize: '10',
                        position: ['bottomCenter']
                    }}
                />
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Main;
