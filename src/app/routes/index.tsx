import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import { useDrawerContext } from '../shared/contexts';

import { Dashboard } from "../pages";
import { Button } from "@mui/material";

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
            path: '/servico-social',
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
        ]);
      }, []);
   
    return (
     <Routes>
     <Route path="/pagina-inicial" element={<Dashboard />} />
     <Route path="/servico-social" element={<Button variant="contained" />} />
     <Route path="/enfermagem" element={<Button variant="contained" />} />
     <Route path="/terapia-ocupacional" element={<Button variant="contained" />} />
     <Route path="/fisioterapia" element={<Button variant="contained" />} />
     <Route path="/sobre" element={<Button variant="contained" />} />
     <Route path="/administracao" element={<Button variant="contained" />} />
     <Route path="/suporte" element={<Button variant="contained" />} />

        <Route path="*" element={<Navigate to="/pagina-inicial" />} />
     </Routes>
    )
}