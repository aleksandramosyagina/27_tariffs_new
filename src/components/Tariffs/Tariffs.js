import style from '../Tariffs/tariffs.module.css';
// import CSSModules from 'react-css-modules';
import '../Tariffs/tariff.css';

function Tariffs(props) {
    // let planClass = classNames(style.plan, )
    // const selectedCard = (isSelected?"selected":"")
    return (
        <div className={style.App} >
            <div className={style.name}>{props.name}</div>
            <div className={style.price}>руб {props.price} /мес</div>
            <div className={style.speed}>до {props.speed} Мбит/сек</div>
            <div className={style.info}>{props.info}</div>
        </div>
    );
}

export default Tariffs;