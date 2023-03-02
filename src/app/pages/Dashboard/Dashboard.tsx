import { ToolbarList } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts/LayoutBase";
import { ToolbarDetail } from '../../shared/components/toolbar/ToolbarDetail';


export const Dashboard = () => {
    return (
        <LayoutBase titulo="Página Inicial | Lar Padre Geremias" 
        barraDeFerramentas={(
            <ToolbarDetail showSaveAndCloseButton  showNewButton  />
        )}>
            Testando
        </LayoutBase>
    );
}