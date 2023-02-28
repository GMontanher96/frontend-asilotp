import { Toolbar } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts/LayoutBase";


export const Dashboard = () => {
    return (
        <LayoutBase titulo="Página Inicial | Lar Padre Geremias" 
        barraDeFerramentas={(
            <Toolbar showInputSearch />
        )}>
            Testando
        </LayoutBase>
    );
}