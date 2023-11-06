import { ReactNode, createContext, useContext, useState } from "react";
import { questions } from '../config/questions';

interface AppProviderProps {
    children: ReactNode
}

interface AppContextData {
    stateCurrent: any;
    setStateCurrent(stateCurrent: any): void;
    newGame(): void;
    getNextAnswer(): void;
    score: any;
    setScore(score: any): void;
}



export const AppContext = createContext({} as AppContextData);

const initialState = {
    questions,
    questionCurrent: 0,
    answered: 0
}


function AppProvider({ children }: AppProviderProps){
    const [stateCurrent, setStateCurrent] = useState(initialState);
    const [questionSelected, setQuestionSelected] = useState(questions);
    const [score, setScore] = useState(null);
    
    async function newGame(){
        setQuestionSelected(questions);
        setStateCurrent(initialState); 
    }

    async function getNextAnswer(){
        // Sorteia um numero do array \\
        let number = Math.floor(Math.random() * questionSelected.length);
        // Retira a questão selecionada das questões disponiveis e reorganiza \\
        let questionsFiltered = questionSelected.filter((value, key) => key != number).sort();
        setQuestionSelected(questionsFiltered);
        
        
        setStateCurrent({
            questions: questionSelected,
            questionCurrent: number,
            answered: stateCurrent.answered + 1
        });
    }


    return(
        <AppContext.Provider
            value={{
                stateCurrent, setStateCurrent,
                newGame, getNextAnswer,
                score, setScore
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

function useAppProvider(){
    const context = useContext(AppContext);
    return context;
}

export { AppProvider, useAppProvider };

