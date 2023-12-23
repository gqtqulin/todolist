
import { Alert, Color } from '@mui/material';
import react from 'react';

interface customAlertProps {
    type: any,
    text: string,
}

export const CustomAlert = (props: customAlertProps) => {

    const { type, text } = props;


    return <Alert severity={type}>{text}</Alert>;
}