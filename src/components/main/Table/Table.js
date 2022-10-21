import dablArr from '../../../image/dablArr.svg';
import s from './Table.module.css';
import { Table } from 'antd';
import { useLayoutEffect } from 'react';


const Table1 = (props) => {

    useLayoutEffect(() => {
        let t = document.getElementById('table11').style
        t.color = '#4D4D4F'
        t.fontSize = '16px'
        t.fontWeight = '500'
        t.lineHeight = '22px'
    }, [])

    const data = [
        {
            num: '#1',
            name: 'Система управления базами данных «Ред База Данных»',
            kod: '02.19',
            class: 'Системы управления базами данных',
            date: '29.01.2016',
            adress: 'Ссылка',
            key: '1'
        },
        {
            num: '#2',
            name: '1С:Школа. Информатика, 11 класс»',
            kod: '04.19',
            class: 'Системы управления процессами организации',
            date: '28.01.2016',
            adress: 'Ссылка',
            key: '2'
        },
        {
            num: '#3',
            name: '1С:Школа. Русский язык, 5–6 класс. Лексикология»',
            kod: '04.21',
            class: 'Информационные системы для решения специфических отраслевых задач',
            date: '25.01.2016',
            adress: 'Ссылка', key: '3'
        },
        {
            num: '#4',
            name: '1С:Комплексная автоматизация 8»',
            kod: '04.11',
            class: 'Системы управления процессами организации',
            date: '20.02.2016',
            adress: 'Ссылка', key: '4'
        },
        {
            num: '#5',
            name: 'Электронный периодический справочник "Система ГАРАНТ"',
            kod: '04.15',
            class: 'Прикладное программное обеспечение общего назначения',
            date: '23.02.2016',
            adress: 'Ссылка', key: '5'
        },
        {
            num: '#6',
            name: 'Система электронного документооборота и автоматизации бизнес-процессов «Е1 Евфрат»',
            kod: '04.13',
            class: 'Системы сбора, хранения, обработки, анализа, моделирования и визуализации массивов данных',
            date: '11.03.2016', adress: 'Ссылка', key: '6'
        },
        {
            num: '#7', name: 'ABBYY Lingvo', kod: '04.07',
            class: 'Лингвистическое программное обеспечение', date: '14.03.2016', adress: 'Ссылка', key: '7'
        },
        {
            num: '#8', name: '1С-Битрикс24 (Компания)', kod: '06.03',
            class: 'Офисные приложения', date: '17.03.2016', adress: 'Ссылка', key: '8'
        },
        {
            num: '#9', name: '1С-Битрикс24 (Проект+)', kod: '05.03',
            class: 'Системы управления проектами, исследованиями, разработкой, проектированием и внедрением',
            date: '19.03.2016', adress: 'Ссылка', key: '9'
        },
        {
            num: '#10', name: '1С-Битрикс24 (Команда)', kod: '04.03',
            class: 'Системы сбора, хранения, обработки, анализа, моделирования и визуализации массивов данных (Команда)',
            date: '20.03.2016', adress: 'Ссылка', key: '10'
        },
        {
            num: '#11', name: 'Система управления базами данных «Ред База Данных (Команда)»', kod: '02.09',
            class: 'Системы управления базами данных (Команда)', date: '26.01.2016', adress: 'Ссылка', key: '11'
        },
    ]

    const columns = [
        {
            title: () => <div style={{ color: `var( --primary-blue)`, display: 'flex' }} >
                <img alt='Стрелка' src={dablArr} className={s.dablArr} />
                Регистрационный номер</div>,
            dataIndex: 'num',
            width: 180
        },
        {
            title: () => <div style={{ color: `var( --primary-blue)`, display: 'flex' }}>
                <img alt='Стрелка' src={dablArr} className={s.dablArr} />
                Наименование<br /> програмного обеспечения</div>,
            dataIndex: 'name',
            width: 280,
            padding: 50
        },
        {
            title: () => <div style={{ color: `var( --primary-blue)` }}>Код<br /> класса</div>,
            dataIndex: 'kod',
            width: 100
        },
        {
            title: () => <div style={{ color: `var( --primary-blue)` }}>Класс програмного<br /> обеспечения</div>,
            dataIndex: 'class',
            width: 210
        },
        {
            title: () => <div style={{ color: `var( --primary-blue)` }}>Дата<br /> регистрации</div>,
            dataIndex: 'date',
            width: 170
        },
        {
            title: () => <div style={{ color: `var( --primary-blue)` }}>Адресс<br /> сайта</div>,
            dataIndex: 'adress',
            width: 100,
            render: (text, record, index) =>
                <a href='/' style={{ textDecoration: 'underline', color: `var( --primary-blue)` }}>{text}</a>
        },
    ]

    return (
        <Table
            //  rowClassName={s.row}
            columns={columns}
            dataSource={data}
            size='small'
            id='table11'
            pagination={{
                pageSize: '10',
                position: ['bottomCenter']
            }}
        />
    )
}

export default Table1;
