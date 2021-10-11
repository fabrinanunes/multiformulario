import { createContext, ReactNode, useContext, useReducer } from "react";

type State = {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    github: string
};

type Action = {
    type: FormActions;
    payload: any; //evitar usar any em TS
};

type Context = {
    state: State;
    dispatch: (action: Action) => void;
};

const initalData: State = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''
};

type FormProviderProps = {
    children: ReactNode
}

//Context
const FormContext = createContext<Context | undefined >(undefined);

//Reducer (sempre retorna os dados depois da ação ser executada)
enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
};

const formReducer = (state: State, action: Action) => {
    switch(action.type){
        case FormActions.setCurrentStep: //troca o passo atual
            return {...state, currentStep: action.payload};
        case FormActions.setName: //troca o nome
            return {...state, name: action.payload};
        case FormActions.setLevel: //troca o level
            return {...state, level: action.payload};
        case FormActions.setEmail: //troca o email
            return {...state, email: action.payload};
        case FormActions.setGithub: //troca o github
            return {...state, github: action.payload};
        default: //se a ação não existir
            return state //não faz modificação
    }
};

//Provider (componente principal: gerencia os dados)
const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initalData)
    //state: contém os dados
    //dispatch: funções para executar as ações

    const value = { state, dispatch}

    return(
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
};

//Hook
const useForm = () => {
    const context = useContext(FormContext);

    if(context === undefined)
        throw new Error('useForm precisa ser usado denro do FormProvider')
    return context;
};

export { FormActions, FormProvider, useForm }