import Input from '../Input';
import styles from './Form.module.css';

export default function Form({inputData, setInputData, submitTextButton="Pesquisar", onSubmit=function(ev){ev.preventDefault();console.log(ev);}}) {
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <fieldset>
                <Input
                    value={inputData}
                    setInputData={setInputData}
                    required={true}
                    placeholder='Digite o nome de usuário'
                    id='userName'
                    label='Campo de Busca'
                />
            </fieldset>
            <button className={styles.buttonSubmit} type='submit'>{submitTextButton}</button>
        </form>
    )
}