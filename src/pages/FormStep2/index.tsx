import { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { useForm, FormActions } from '../../contexts/FormContext'

import * as C from './style';
import { Theme } from '../../components/Theme';
import { SelectOption } from '../../components/SelectOption';

export const StepTwo = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === ''){
            history.push('/')
        }else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
    }, [])

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    const handleNextStep = () => {
        history.push('/step3')
    };

    const handlePreviousStep = () => {
        history.push('/')
    };

    return(
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, como te descreves?</h1>
                <p>Escolha a opção que melhor condiz com seu nível de conhecimento do mundo da programação</p>

                <hr/>

                <SelectOption
                    title='Sou iniciante'
                    description='Comecei a programar há menos de 2 anos'
                    icon='🥳'
                    selected={state.level === 0}
                    onClick={()=>setLevel(0)}
                />

                <SelectOption
                    title='Sou programador'
                    description='Já programo há 2 anos ou mais'
                    icon='🤓'
                    selected={state.level === 1}
                    onClick={()=>setLevel(1)}
                />
            
                <Link to='/' className='PreviousStep'>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}