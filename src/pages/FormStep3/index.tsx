import { ChangeEvent, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { useForm, FormActions } from '../../contexts/FormContext'

import * as C from './style';
import { Theme } from '../../components/Theme';

export const StepThree = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === ''){
            history.push('/')
        }else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }
    }, [])

    const handleNextStep = () => {
        if(state.email !== '' && state.github !== ''){
            alert('Cadastro finalizado. Confira a proposta de emprego no teu e-mail')
        }else{
            alert('Preencha todos os campos')
        }
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    return(
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1> Legal {state.name}, onde te achamos?</h1>
                <p>Preencha seus dados para conseguirmos te contatar.</p>

                <hr/>

                <label> Qual seu e-mail? <input type="email" value={state.email} onChange={handleEmailChange} autoFocus /></label>
                <label> Qual seu Github? <input type="url" value={state.github} onChange={handleGithubChange} autoFocus /></label>
            
                <Link to='/step2' className='PreviousStep'>Voltar</Link>
                <button onClick={handleNextStep}>Enviar</button>
            </C.Container>
        </Theme>
    )
}