import React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';


interface SelectProps {
    id: string,
    lable: string,
    lableId: string,
    onChange?(): void,
    col?: 'col-md-2' | 'col-md-6' | 'col-md-12',
}

export const DefaultSelect: React.FC<SelectProps> = (props) => {
    return(
        <Select
            id={props.id}
            label={props.lable}
            labelId={props.lableId}
            onChange={props.onChange}
            className={props.col ? props.col : 'col-md-6'}
        />
    )
}