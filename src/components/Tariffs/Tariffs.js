import '../Tariffs/tariffs.module.css';

const style={backgroundColor: 'red', 
width: 200, 
height: 50,
fontSize: '1.5em'
};
function Tariffs(props) {
    return (
        <div className="plan-card">
            <div className="name" style={ style }>{props.name}</div>
            <div className="price">{props.price}</div>
            <div className="speed">{props.speed}</div>
            <div className="info">{props.info}</div>
        </div>
    );
}

export default Tariffs;