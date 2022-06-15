
import s from './Notifications.module.css';



const Notifications = (props) => {



    return (

        <div className={s.containerNot}>

            {props.notifications.map((a, index) => {
                return (
                    <div key={index} className={s.notItem}>{a}</div>
                )
            })}

        </div>


    )
}

export default Notifications;
