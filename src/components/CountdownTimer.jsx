import useCountdown from "../useCountdown";
import ExpiredNote from "./ExpiredNode";
import ShowCounter from "./ShowCounter";


const CountdownTimer = (props) => {

    const [days, hours, minutes, seconds] = useCountdown(props.targetTime);
    
    if(days+hours+minutes+seconds <= 0) {
        return <ExpiredNote />
    }
    else {
        return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds}/>
    }
}

export default CountdownTimer;