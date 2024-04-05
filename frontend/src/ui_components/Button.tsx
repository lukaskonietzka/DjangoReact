import React from 'react';
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';

interface ButtonProps {
    id: string,
    name: string,
    disabled: boolean,
    col?: 'col-md-2' | 'col-md-6' | 'col-md-12',
    variant?: 'text' | 'outlined' | 'contained',
    onClick?(): void,
    type?: 'error' | 'secondary' | 'success',
    needSendIcon?: boolean,
    setFocus?: boolean
}

export const DefaultButton: React.FC<ButtonProps> = (props: ButtonProps) => {

    return(
         <Button
             id={props.id}
             name={props.name}
             disabled={props.disabled}
             variant={props.variant}
             className={props.col ? props.col : 'col-md-6'}
             onClick={props.onClick}
             color={props.type}
             startIcon={props.needSendIcon ? <SendIcon/> : ''}
             autoFocus={props.setFocus}
         >
             {props.name}
         </Button>
    )
}