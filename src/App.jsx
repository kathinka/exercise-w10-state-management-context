import "./styles.css"
import { ThemeProvider } from "./components/themes/AppTheme.jsx";
import { ImageComponent } from "./components/ImageComponent.jsx";
import { Test } from "./components/Test.jsx";
export const App = () => {
  return (
    <ThemeProvider>
      <>
      <Test/>
      <ImageComponent/>
      </>
    </ThemeProvider>
  );
};
