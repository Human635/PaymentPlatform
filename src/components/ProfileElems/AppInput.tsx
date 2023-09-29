import React from "react";

interface AppInputProps {
    type?: string,
    id?: string,
    name?: string,
    placeholder?: string,
    isRequired?: boolean,
    className?: string
}

export const AppInput = ({type, id, name, placeholder, isRequired, className, ...props}: AppInputProps) => {
    return(
        <input 
        type={type} 
        id={id} 
        name={name} 
        placeholder={placeholder} 
        required={isRequired} 
        className={className} 
        {...props} />
    )
}