import { useTheme } from "../themeProvider";
import ToggleButton from "./toggleButton";

const Header = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <header style={{
            backgroundColor: isDarkMode ? '#262626' : 'white',
            color: isDarkMode ? 'white' : 'black',
            minHeight: '25px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
            padding: '10px 20px',
            transition: 'background-color 0.3 ease, color 0.3 ease'
        }}>
            <div>Header</div>
            <div style={{ marginLeft: 'auto' }}>
                <ToggleButton isDarkMode={isDarkMode} toggle={toggleTheme} />
            </div>
            <div style={{marginLeft: '25px'}}>
                user    
            </div>
        </header>
    );
}

export default Header;