import React, {useState} from 'react';
import '../styles/pages.css'
import {AxiosInstance} from "../axios";
import {DefaultButton} from "../ui_components/Button";
import {Box} from "@mui/material";


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
            <Box
                sx={{
                    display: 'grid',
                    columnGap: 5,
                    rowGap: 5,
                    gridTemplateColumns: 'repeat(2, 1fr)',
                }}>
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
                {projects.map((project: Project) => {
                    return(
                        <li>Project name: {project.name}</li>
                    )
                })}
            </Box>
        </div>
    )
}