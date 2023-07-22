import classes from './DateTimeDisplay.module.css';

const DateTimeDisplay = ({value, type, isDanger}) => {
    return (
        <div className={isDanger? classes['countdown-danger']:classes.countdown}>
            <p>{value}</p>
            <span>{type}</span>
        </div>   
    )
}

export default DateTimeDisplay;