import { useAppData } from "../contexts/AppContext";
import { useTheme } from "./themes/AppTheme";
export const Test = () => {
const {quotes} = useAppData();
  const { theme, toggleTheme } = useTheme();
  console.log(theme);

  return (
    <>
    <h1>Quotes</h1>
    <ul>
      {quotes.map((quote, index) => (
        <li key={index}>{quote}</li>
      ))}
    </ul>
    <section className={theme}>
    <h1>Current Theme: {theme}</h1>
    <button onClick={toggleTheme} value={theme}>Toggle Theme</button>
    <div className={theme}>Look at me!</div>
    </section>
    </>
  );
}