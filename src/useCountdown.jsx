import React, {useState, useEffect}from 'react';

const useCountdown = (targetDate) => {

    const countdownDate = targetDate;
    console.log('countdowndate'+countdownDate);

    const [countdown, setCountdown] = useState(countdownDate-new Date().getTime());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCountdown(countdownDate - new Date().getTime());

        }, 1000);
        return ()=>{
            clearInterval(intervalId);
        }
    },[countdownDate]);

    return getReturnValues(countdown);
}

const getReturnValues = (countdown) => {
    //calculate left time
    const days = Math.floor(countdown/(24*60*60*1000));
    const hours = Math.floor((countdown%(24*60*60*1000))/(60*60*1000));
    const minutes = Math.floor((countdown%(60*60*1000))/(60*1000));
    const seconds = Math.floor(countdown%(60*1000)/1000);

    return [days, hours, minutes, seconds];
}

export default useCountdown;