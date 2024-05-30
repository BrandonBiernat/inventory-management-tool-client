import { MouseEvent, useState } from "react";

interface ButtonProps {
    text: string;
    type?: 'submit' | 'reset' | 'button';
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: ButtonProps) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <button 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            type={props.type}
            onClick={props.onClick}
            style={{
                fontSize: '1.2em',
                cursor: 'pointer',
                margin: '5px',
                border: 'none',
                width: '100%',
                padding: '10px',
                borderRadius: '10px',
                backgroundColor: isHovered ? 'blue' : 'black',
                color: 'white',
                transition: 'background-color 0.3s',
                boxShadow: isHovered ? '0 0 10px rgba(0, 0, 255, 0.5)' : 'none'
            }}>
                {props.text}
        </button>
    );
}

export default Button;