import { ToolbarList } from "../../shared/components"
import { LayoutBase } from "../../shared/layouts"

export const People: React.FC = () => {
    return (
        <LayoutBase titulo="Listagem de Pessoas"
        barraDeFerramentas={
            <ToolbarList 
            showInputSearch
            textButtonNew="Novo"
            
            />
        }>

        </LayoutBase>
    )
}