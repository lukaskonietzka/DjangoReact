import React, {useState} from 'react';
import {DefaultButton} from "../ui_components/Button";
import {DefaultSelect} from "../ui_components/Select";
import {AxiosInstance} from "../axios";
import {TextField} from '@mui/material';



interface CurrentProject {
    name: string,
    start_date: string,
    end_date: string,
    comments: string,
    status: string,
}

export const Create = () => {
    const [currentProject, setCurrentProject] = useState<CurrentProject>({
        name: 'test',
        start_date: '2023-10-13',
        end_date: '2023-10-14',
        comments: 'test',
        status: 'test'
    });

   const sendData = (): void => {
        AxiosInstance.post('project/', {
            name: currentProject.name,
            start_date: '2023-10-13',
            end_date: '2023-10-14',
            comments: currentProject.comments,
            status: currentProject.status

        }).then((response) => {
            console.log(response.data)
        })
    }

    return(
      <div className={'pages-content'}>
          <div className={'row'}>
              <div className={'col-md-2'}>
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
              </div>
              <div className={'col-md-2'}>
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
              </div>
              <div className={'col-md-2'}>
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
              </div>
          </div>
          <div className={'row'}>
              <DefaultButton
                  id={'submit'}
                  name={'Submit'}
                  disabled={false}
                  col={'col-md-2'}
                  variant={'outlined'}
                  onClick={sendData}
                  type={'success'}
                  needSendIcon
              />
          </div>
      </div>
    )
}