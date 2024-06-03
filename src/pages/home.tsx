import Header from "../components/header";
import { useTheme } from "../themeProvider";

const Home = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <>
            <div style={{
                backgroundColor: isDarkMode ? '#333333' : '#e6e6e6',
                color: isDarkMode ? 'white' : 'black',
                display: 'flex',
                justifyContent: 'center',
                minHeight: '96vh',
                transition: 'background-color 0.3 ease, color 0.3 ease'
            }}>
                
            </div>
        </>
    );
}

export default Home;