import dablArr from '../../../image/dablArr.svg'
import s from './Table.module.css';

import { Table } from "antd";


const Table1 = (props) => {



    setTimeout(()=> {
        let t = document.getElementById('table11').style
       t.color = '#4D4D4F'
       t.fontSize = '16px'
       t.fontWeight = '500'
       t.lineHeight = '22px'
    })

    const arr = [
        {
            number: '#1', name: 'Система управления базами данных «Ред База Данных»', kod: '02.09',
            class: 'Системы управления базами данных', date: '29.01.2016', adress: 'Ссылка', кеу: '1'
        },
        {
            number: '#2', name: '1С:Школа. Информатика, 11 класс»', kod: '04.11',
            class: 'Системы управления процессами организации', date: '29.01.2016', adress: 'Ссылка', кеу: '2'
        },
        {
            number: '#3', name: '1С:Школа. Русский язык, 5–6 класс. Лексикология»', kod: '04.11',
            class: 'Информационные системы для решения специфических отраслевых задач', 
            date: '29.01.2016', adress: 'Ссылка', кеу: '3'
        },
        {
            number: '#4', name: '1С:Комплексная автоматизация 8»', kod: '04.11',
            class: 'Системы управления процессами организации', date: '20.02.2016', adress: 'Ссылка', кеу: '4'
        },
        {
            number: '#5', name: 'Электронный периодический справочник "Система ГАРАНТ"', kod: '04.15',
            class: 'Прикладное программное обеспечение общего назначения', date: '20.02.2016', 
            adress: 'Ссылка', кеу: '5'
        },
        {
            number: '#6', 
            name: 'Система электронного документооборота и автоматизации бизнес-процессов «Е1 Евфрат»', 
            kod: '04.13',
            class: 'Системы сбора, хранения, обработки, анализа, моделирования и визуализации массивов данных',
             date: '11.03.2016', adress: 'Ссылка', кеу: '6'
        },
        {
            number: '#7', name: 'ABBYY Lingvo', kod: '04.07',
            class: 'Лингвистическое программное обеспечение', date: '11.03.2016', adress: 'Ссылка', кеу: '7'
        },
        {
            number: '#8', name: '1С-Битрикс24 (Компания)', kod: '04.03',
            class: 'Офисные приложения', date: '14.03.2016', adress: 'Ссылка', кеу: '8'
        },
        {
            number: '#9', name: '1С-Битрикс24 (Проект+)', kod: '04.03',
            class: 'Системы управления проектами, исследованиями, разработкой, проектированием и внедрением',
             date: '14.03.2016', adress: 'Ссылка', кеу: '9'
        },
        {
            number: '#10', name: '1С-Битрикс24 (Команда)', kod: '04.03',
            class: 'Системы сбора, хранения, обработки, анализа, моделирования и визуализации массивов данных',
             date: '14.03.2016', adress: 'Ссылка', кеу: '10'
        },
        {
            number: '#11', name: 'Система управления базами данных «Ред База Данных»', kod: '02.09',
            class: 'Системы управления базами данных', date: '29.01.2016', adress: 'Ссылка', кеу: '11'
        },
    ]


    
    const columns = [
        {
            title: ()=> <div style={{color: `var( --primary-blue)`, display:'flex'}}>
                 <img alt='' src={dablArr} className={s.dablArr}></img>
                Регистрационный номер</div>,
            dataIndex: 'number',
            width: 180,
            key: 'key',
           
          
        },
        {
            title:()=> <div style={{color: `var( --primary-blue)`,display:'flex'}}>
                <img alt='' src={dablArr} className={s.dablArr}></img>
                Наименование<br></br> програмного обеспечения</div>,
            dataIndex: 'name',
            width: 280,
            padding: 50,
            key: 'key',
        
           
        },
        {
            title:()=> <div style={{color: `var( --primary-blue)`}}>Код<br></br> класса</div>,
            dataIndex: 'kod',
            width: 100,
            key: 'key',
          
        },
        {
            title: ()=> <div style={{color: `var( --primary-blue)`}}>Класс програмного<br></br> обеспечения</div>,
            dataIndex: 'class',
            width: 210,
            key: 'key',
           
        },

        {
            title: ()=> <div style={{color: `var( --primary-blue)`}}>Дата<br></br> регистрации</div>,
            dataIndex: 'date',
            width: 170,
            key: 'key',
           
        },
        {
            title: ()=> <div style={{color: `var( --primary-blue)`}}>Адресс<br></br> сайта</div>,
            dataIndex: 'adress',
            key: 'key',
            width: 100,
            render: (text, record, index) =>
                <a  href='ссылка' style={{ textDecoration: 'underline', color: `var( --primary-blue)`}}>{text}</a>
        },

    ]
    const data = arr


    
    return (
       
                <Table
                    // rowClassName={s.row}
                    columns={columns}
                    dataSource={data}
                    size="small"
                    id='table11'
                    pagination={{
                        pageSize: '10',
                        position: ['bottomCenter']
                    }}
                />
          
    )
}

export default Table1;
