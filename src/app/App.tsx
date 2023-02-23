import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { SideMenu } from './shared/components/side-menu/SideMenu';

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>

        <SideMenu>
        <AppRoutes />
        </SideMenu>
      </BrowserRouter>
    </AppThemeProvider>
  );
};
