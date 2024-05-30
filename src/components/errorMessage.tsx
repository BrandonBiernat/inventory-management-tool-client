interface ErrorMessageProps {
    message: string
}

const ErrorMessage = (props: ErrorMessageProps) => {
    return (
        <div 
            style={{
                border: '1px solid red',
                borderRadius: '10px',
                padding: '10px',
                margin: '10px',
                backgroundColor: '#fde7e7' 
            }}>
            <div 
                style={{
                    color: 'red',
                }}>
                {props.message}
            </div>
        </div>
    );
}

export default ErrorMessage;