import React, {useState} from 'react';
import '../styles/pages.css'
import {AxiosInstance} from "../axios";
import {DefaultButton} from "../ui_components/Button";
import {Box} from "@mui/material";
import {notify} from "../ui_components/Notifications";


interface CurrentState {
    prompt: string
    answer: string,
}

export const Home = () => {
    const [projects, setProjects] = useState<CurrentState[]>([])

    const fetchData = (): void => {
        AxiosInstance.get('greenAssistant/').then((response): void => {
            setProjects(response.data)
        }).catch((response): void =>{
             notify.error('Server konnte nicht erreicht werden')
        })
    }

    return(
        <div className={'pages-content'}>
            <Box
                sx={{
                    display: 'grid',
                    columnGap: 5,
                    rowGap: 5,
                    gridTemplateColumns: 'repeat(1, 1fr)',
                }}>
                <DefaultButton
                    id={'showData'}
                    name={'Show Data'}
                    disabled={false}
                    col={'col-md-2'}
                    variant={'outlined'}
                    onClick={fetchData}
                    type={'error'}
                    needSendIcon={false}
                />
                {projects.map((currentState: CurrentState, index: number) => {
                    return(
                        <li key={index}>Antwort: {currentState.answer} prompt: {currentState.prompt}</li>
                    )
                })}
            </Box>
        </div>
    )
}