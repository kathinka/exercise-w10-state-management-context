import {useTheme} from "./themes/AppTheme";

export const ImageComponent = () => {
const {theme} = useTheme();
const style = `hey-${theme}`;
const tekstlight ="Good day!";
const tekstdark = "Good night!";
console.log("style", style)
  return (
    <div className={style}>
      <p>{theme === "light" ? tekstlight : tekstdark}</p>
  
    </div>
  );
};
