import {useTheme} from './themes/AppTheme';

export const ThemedButton = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <>
<button
onClick={toggleTheme}
style={{backgroundColor: theme === "light" ? "white" : "black", color: theme === "light" ? "black" : "white"}}>
  {theme==="light"? "Switch to Dark Theme": "Switch to Light theme"}</button>
  </>

  )};
