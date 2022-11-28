import style from '../Tariffs/tariffs.module.css';
import CSSModules from 'react-css-modules';
import '../Tariffs/tariff.css';

function Tariffs(props, isSelected) {
    // let planClass = classNames(style.App, props.isSelected? "selected":"" )
    const selectedCard = (isSelected? "selected" : " ")
    return (
        <div className={[style.App, selectedCard].join(' ')} >
            <div className={style.name_style} styleName={props.color}>{props.name}</div>
            <div className={style.price_style} styleName={props.title_color}>руб {props.price} /мес</div>
            <div className={style.speed_style}>до {props.speed} Мбит/сек</div>
            <div className={style.info_style}>{props.info}</div>
        </div>
    );
}

export default CSSModules(Tariffs, style);