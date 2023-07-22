import classes from './ExpiredNode.module.css';

const ExpiredNote = () => {
    return (
        <div className={classes.expired}>
            <span>Expired!!!</span>
            <p>Please select a future date and time.</p>
        </div>
    )
}

export default ExpiredNote;