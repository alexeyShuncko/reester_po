import s from './Document.module.css';
import { Table } from "antd";
import downArr from '../../../image/downArr.svg'
import soderj from '../../../image/soderj.svg'



const Document = (props) => {



    setTimeout(() => {
        let t = document.getElementById('table12').style
        t.color = '#4D4D4F'
        t.fontSize = '16px'
        t.fontWeight = '500'
        t.lineHeight = '22px'
    })

    const arr = [
        {
            category: 'Общие документы', name: `Постановление Правительства Российской 
            Федерации от 20.07.2021 "О внесении 
            изменений в постановление Правительства 
            Российской Федерации от 16 ноября 2015 г. 
            № 1236"`, date: '20.07.2021', number: '1226', adress: `Скачать (469 Кб)`, кеу: '1'
        },
        {
            category: 'Общие документы', name: `Приказ №486 от 22.09.2020 Об утверждении 
            классификатора программ для электронных 
            вычислительных машин и баз данных`, date: '22.09.2020', number: '468',
            adress: `Скачать(10.81 Мб)`, кеу: '2'
        },

        {
            category: 'Общие документы', name: `Административный регламент ПРИКАЗ 
            от 21 февраля 2019 года N62`, date: '21.02.2019', number: '468',
            adress: `Скачать(10.81 Мб)`, кеу: '3'
        },
        {
            category: 'Общие документы', name: `Постановление Правительства РФ 
            от 20.12.2017 № 1594 "О внесении изменений 
            в постановление Правительства Российской 
            Федерации от 16 ноября 2015 г. № 1236"`, date: '20.12.2017', number: '1594',
            adress: `Скачать(2.07 Мб)`, кеу: '4'
        },
        {
            category: 'Общие документы', name: `Об утверждении правил применения 
            классификатора программ для электронных 
            вычислительных машин и баз данных`, date: '31.12.2015', number: '622',
            adress: `Скачать(4.69 Мб)`, кеу: '5'
        },




    ]



    const columns = [
        {
            title: () => <div style={{ color: `var( --primary-blue)` }}>Категория</div>,
            dataIndex: 'category',
            key: 'key',
        },
        {
            title: () => <div style={{ color: `var( --primary-blue)` }}>Наименование</div>,
            dataIndex: 'name',
            key: 'key',
            width: 400,
            render: (text, record, index) =>
                <div style={{ marginRight: '60px' }}>
                    {text}
                </div>
        },
        {
            title: () => <div style={{ color: `var( --primary-blue)` }}>Дата</div>,
            dataIndex: 'date',
            key: 'key',
        },
        {
            title: () => <div style={{ color: `var( --primary-blue)` }}>Номер</div>,
            dataIndex: 'number',
            key: 'key',
        },
        {
            title: () => <div style={{ color: `var( --primary-blue)`, display: 'flex' }}>
                <img alt='' src={soderj} style={{ marginRight: '10px' }} ></img>
                Содержание</div>,
            dataIndex: 'adress',
            key: 'key',
            render: (text, record, index) =>
                <div style={{ display: 'flex' }}>
                    <img alt='' src={downArr} className={s.downArr}></img>
                    <a href='ссылка'
                        style={{ textDecoration: 'underline', color: `var( --primary-blue)`, marginLeft: '10px' }}>
                        {text.slice(0, 7)}<br></br> {text.slice(7, text.length + 1)}</a>
                </div>
        },

    ]
    const data = arr



    return (
        <>
            <div className={s.docTitle}>Документы</div>
            <div className={s.docSubTitle}>Всего документов: <span>5</span></div>
            <Table
                columns={columns}
                dataSource={data}
                size="small"
                id='table12'
                pagination={{
                    pageSize: '10',
                    position: ['none']
                }}
            />
        </>



    )
}

export default Document;
