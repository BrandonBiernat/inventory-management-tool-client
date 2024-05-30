import { useTheme } from "../themeProvider";

interface ToggleButtonProps {
    isDarkMode: boolean;
    toggle: () => void;
}

const ToggleButton = (props: ToggleButtonProps) => {
    return (
        <div>
            <input 
                type="checkbox"
                id="themeToggle"
                checked={props.isDarkMode}
                onChange={props.toggle}
                style={{ display: 'none' }}
            />
            <label htmlFor="themeToggle">
                <div style={{
                    width: "50px",
                    height: "24px",
                    borderRadius: "12px",
                    backgroundColor: props.isDarkMode ? "#586e75" : "#b2bec3",
                    position: "relative",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                }}>
                    <div style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "#ffffff",
                        position: "absolute",
                        top: "2px",
                        left: props.isDarkMode ? "calc(100% - 24px)" : "2px",
                        transition: "left 0.3s ease",
                    }}>
                    </div>
                </div>
            </label>
        </div>
    );
}

export default ToggleButton;