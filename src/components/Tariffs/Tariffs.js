import style from '../Tariffs/tariffs.module.css';
import CSSModules from 'react-css-modules';
import '../Tariffs/tariff.css';
import {useState} from 'react';
import classNames from 'classnames';

function Tariffs(props) {
    // const {isSelected}=props.isSelected;
    // let planClass = classNames(style.App, props.isSelected? "selected":"" )
    const [selected, setSelected] = useState(false);
    const handleChange = () => {
        setSelected (!selected);
    }
    // const selectedCard = props.isSelected ? "selected" : "";
    return (
        // <div className={[style.App, selectedCard].join(' ')} >
            //   <div className={[style.App, selectedCard].join(' ')} >
<div onClick = {handleChange} className={classNames(style.App, selected ? style.selected : "")}>
            <div className={style.name_style} styleName={props.color}>{props.name}</div>
            <div className={style.price_style} styleName={props.title_color}>руб {props.price} /мес</div>
            <div className={style.speed_style}>до {props.speed} Мбит/сек</div>
            <div className={style.info_style}>{props.info}</div>
        </div>
    );
}

export default CSSModules(Tariffs, style);