import React, {useState} from 'react';
import {DefaultButton} from "../ui_components/Button";
import {AxiosInstance} from "../axios";
import {Box, TextField} from '@mui/material';
import {ValidationManager} from '../manager/ValidationManager'
import {notify} from "../ui_components/Notifications";


interface CurrentProject {
    name: string,
    start_date: string,
    end_date: string,
    comments: string,
    status: string,
}

export const Create = () => {
    const validationManager: ValidationManager = new ValidationManager();
    const [currentProject, setCurrentProject] = useState<CurrentProject>({
        name: '',
        start_date: '2023-10-13',
        end_date: '2023-10-14',
        comments: '',
        status: ''
    });

   const sendData = (): void => {
       if (!validationManager.valide(currentProject.name) ||
           !validationManager.valide(currentProject.comments) ||
           !validationManager.valide(currentProject.status)) {
           notify.error('Bitte füllen Sie alle Felder aus');
           return
       }
       notify.success('Send to Backend')
       AxiosInstance.post('project/', {
            name: currentProject.name,
            start_date: '2023-10-13',
            end_date: '2023-10-14',
            comments: currentProject.comments,
            status: currentProject.status

       }).then((response): void => {
            console.log(response.data)
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
                    id={'name'}
                    name={'Name'}
                    label={'Name'}
                    placeholder={'type in your name'}
                    onChange={(event):void => {
                      setCurrentProject(values => ({
                          ...values,
                          ['name']: event.target.value
                      }))
                    }}
                />
                <TextField
                    id={'comments'}
                    name={'Comments'}
                    label={'Comments'}
                    placeholder={'type in your firstname'}
                    onChange={(event):void => {
                      setCurrentProject(values => ({
                          ...values,
                          ['comments']: event.target.value
                      }))
                    }}
                />
                <TextField
                    id={'status'}
                    name={'Status'}
                    label={'Status'}
                    placeholder={'type in your firstname'}
                    onChange={(event):void => {
                      setCurrentProject(values => ({
                          ...values,
                          ['status']: event.target.value
                      }))
                    }}
                />
                <DefaultButton
                    id={'submit'}
                    name={'Submit'}
                    disabled={false}
                    col={'col-md-2'}
                    variant={'contained'}
                    onClick={sendData}
                    type={'success'}
                    needSendIcon
                />
            </Box>
        </div>
    )
}