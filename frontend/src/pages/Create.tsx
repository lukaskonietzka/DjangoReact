import React, {useState} from 'react';
import {DefaultButton} from "../ui_components/Button";
import {AxiosInstance} from "../axios";
import {Box, TextField} from '@mui/material';
import {ValidationManager} from '../manager/ValidationManager'
import {notify} from "../ui_components/Notifications";


interface CurrentState {
    prompt: string,
    answer: string
}

export const Create = () => {
    const validationManager: ValidationManager = new ValidationManager();
    const [currentProject, setCurrentProject] = useState<CurrentState>({
        prompt: '',
        answer: ''
    });

   const sendData = (): void => {
       if (!validationManager.valide(currentProject.prompt)) {
           notify.error('Bitte füllen Sie alle Felder aus');
           return
       }

       AxiosInstance.post('greenAssistant/', {
            prompt: currentProject.prompt,
            answer: ''
       }).then((response): void => {
           notify.success('Saved')
       }).catch((response): void => {
           if (response.code === 'ERR_NETWORK') {
               notify.error('Server konnte nicht erreicht werden')
           } else {
               notify.error('Die angegebene Feld existiert bereits')
           }
       })
   }

    return(
        <div className={'pages-content'}>
            <Box
            sx={{
                display: 'grid',
                columnGap: 5,
                rowGap: 5,
                gridTemplateColumns: 'repeat(2, 1fr)',
            }}>
                <TextField
                    id={'prompt'}
                    name={'prompt'}
                    label={'Stell mir eine Frage'}
                    placeholder={'Stell mir eine Frage'}
                    onChange={(event):void => {
                      setCurrentProject(values => ({
                          ...values,
                          ['prompt']: event.target.value
                      }))
                    }}
                />
                <DefaultButton
                    id={'submit'}
                    name={'Send'}
                    disabled={false}
                    col={'col-md-2'}
                    variant={'contained'}
                    onClick={sendData}
                    type={'success'}
                    needSendIcon
                />
                <Box style={{
                    alignItems: 'center',
                    justifyContent:'center',
                    display: 'flex',
                    fontSize: '8px'
                }}>
                    Hallo ich bin eine Anwendung
                </Box>
            </Box>
        </div>
    )
}