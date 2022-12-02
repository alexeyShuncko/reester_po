import s from './Notifications.module.css';

const Notifications = ({ notifications }) => {
  return (
    <div className={s.containerNot}>
      {notifications.map((a, i) => (
        <div key={i} className={s.notItem}>
          {a}
        </div>
      ))}
    </div>
  );
};

export default Notifications;
