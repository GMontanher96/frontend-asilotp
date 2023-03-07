import Tab from '../../shared/components/tab/Tab';
import { LayoutBase } from '../../shared/layouts';

export const Admin: React.FC = () => {
    return (
        <LayoutBase  titulo="Administração">
            <Tab />
        </LayoutBase>
    )
}