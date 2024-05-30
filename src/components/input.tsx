import { ChangeEvent, useState } from "react";

interface InputProps {
    type: string;
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleFocus = () => {
        setIsFocused(true);
    }

    const handleBlur = () => {
        setIsFocused(false);
    }

    return (
        <>
            <input 
                type={props.type} 
                placeholder={props.placeholder}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={props.onChange}
                style={{
                    fontSize: '1em',
                    width: '100%',
                    margin: '10px',
                    padding: '5px',
                    outline: '0',
                    borderWidth: '0 0 2px',
                    borderColor: isFocused ? 'blue' : 'black',
                    transition: 'border-color 0.3s'
                }}
            />
        </>
    );
}

export default Input; 