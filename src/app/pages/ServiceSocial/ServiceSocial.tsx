import { useMemo } from "react";
import { useSearchParams } from "react-router-dom"

import { ToolbarList } from "../../shared/components"
import { LayoutBase } from "../../shared/layouts"

export const ServiceSocial: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const search = useMemo(() => {
        return searchParams.get('search') || '';
    }, [searchParams]);


    return (
        <LayoutBase titulo="Serviço Social"
        barraDeFerramentas={
            <ToolbarList 
            showInputSearch
            textButtonNew="Novo"
            textSearch={search}
            onEditTextSearch={texto => setSearchParams({ search: texto}, { replace: true })}
            
            />
        }>

        </LayoutBase>
    )
}