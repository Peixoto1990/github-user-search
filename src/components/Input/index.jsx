import styles from './Input.module.css';

export default function Input({type="text", required=false, id=`${Math.floor(Math.random() * 10)}${type}`, label="inputField", value="", setInputData, placeholder="", reference}) {
    function changeData(ev) {
        setInputData(ev.target.value);
    }

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
            ref={reference} 
            className={styles[type]}
            value={value}
            type={type}
            required={required}
            id={id}
            onChange={changeData}
            placeholder={placeholder}
            />
        </div>
    )
}