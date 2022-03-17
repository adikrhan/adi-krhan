import classes from './Button.module.css';

const Button = (props) => {
    const btnClasses = `${classes.btn} ${classes[props.bgColor]}`;
    return <button type={props.type} className={btnClasses}>{props.text}</button>
}

export default Button;