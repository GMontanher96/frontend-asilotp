import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import { useDrawerContext } from '../shared/contexts';

import { Dashboard } from "../pages";
import { ServiceSocial } from "../pages";
import { People } from "../pages";

export const AppRoutes = () => {
    const { setDrawerOptions } = useDrawerContext();
    
    useEffect(() => {
        setDrawerOptions([
          {
            icon: 'home',
            path: '/pagina-inicial',
            label: 'Home',
          },
          {
            icon: 'people',
            path: '/people',
            label: 'Serviço Social',
          },
          {
            icon: 'favorite',
            path: '/enfermagem',
            label: 'Enfermagem',
          },
          {
            icon: 'psychology',
            path: '/terapia-ocupacional',
            label: 'T. Ocupacional',
          },
          {
            icon: 'blind',
            path: '/fisioterapia',
            label: 'Fisioterapia',
          },
          {
            icon: 'info',
            path: '/sobre',
            label: 'Sobre',
          },
          {
            icon: 'settings',
            path: '/pessoas',
            label: 'Administração',
          },
        ]);
      }, []);
   
    return (
     <Routes>
     <Route path="/pagina-inicial" element={<Dashboard />} />
     <Route path="/people" element={<People />} />

        <Route path="*" element={<Navigate to="/pagina-inicial" />} />
     </Routes>
    )
}