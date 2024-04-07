import "./styles.css"
import { ThemeProvider } from "./components/themes/AppTheme.jsx";
import { ImageComponent } from "./components/ImageComponent.jsx";
import { Test } from "./components/Test.jsx";
import { ThemedButton } from "./components/ThemedButton.jsx";
import { AppDataProvider} from "./contexts/AppContext.jsx";
import { Home } from "./components/Home.jsx";
export const App = () => {
  return (
    <AppDataProvider>
 <ThemeProvider>

      <>
      <Home/>
      <Test/>
      <ThemedButton/>
      <ImageComponent/>
      </>

    </ThemeProvider>
    </AppDataProvider>
  );
};
