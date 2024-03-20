import React, {useEffect, useState} from 'react';
import '../styles/pages.css'
import {Textfield} from "../ui_components/TextField";
import {AxiosInstance} from "../axios";
import {DefaultButton} from "../ui_components/Button";


interface Project {
    name: string,
    start_date: string,
    end_date: string,
    status: string
}

export const Home = () => {
    const [projects, setProjects] = useState<Project[]>([])

    const handleButtonClick = () => {
        AxiosInstance.get('project/').then((response): void => {
            setProjects(response.data)
        })
    }

    return(
      <div className={'pages-content'}>
          <div className={'row'}>
              <DefaultButton
                      id={'show'}
                      name={'Show'}
                      disabled={false}
                      col={'col-md-2'}
                      variant={'outlined'}
                      onClick={handleButtonClick}
                      type={'error'}
                      needSendIcon={false}
              />
          </div>
          <div className={'row'}>
              {projects.map((project: Project) => {
                  return(
                      <div>Project name: {project.name}</div>
                  )
              })}
          </div>
      </div>
    )
}