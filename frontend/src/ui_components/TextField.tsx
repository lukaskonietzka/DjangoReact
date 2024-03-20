import React from 'react';
import {TextField as BaseTextField} from "@mui/material";

interface TextFieldProps {
    id: string
    value?: string
    name: string,
    label: string
    placeholder: string
    col?: 'col-md-2' | 'col-md-6' | 'col-md-12',
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Textfield: React.FC<TextFieldProps> = (props: TextFieldProps) => {

    // const handleChange = (event: any): void => {
    //     props.value = event.target.value.toString()
    //     props.onChange(props.value, props.id)
    //}


    return(
        <BaseTextField
            id={props.id}
            value={props.value}
            name={props.name}
            label={props.label}
            placeholder={props.placeholder}
            className={props.col ? props.col : 'col-md-6'}
            onChange={()=>props.onChange}
        />
    )
}