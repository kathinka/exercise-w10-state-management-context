import { useTheme } from "./themes/AppTheme";
export const Test = () => {

  const { theme, toggleTheme } = useTheme();
  console.log(theme);

  return (
    <>
    <section className={theme}>
    <h1>Current Theme: {theme}</h1>
    <button onClick={toggleTheme} value={theme}>Toggle Theme</button>
    <div className={theme}>Look at me!</div>
    </section>
    </>
  );
}