import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ToolbarList } from "../../shared/components";
import { useDebounce } from "../../shared/hooks";
import { LayoutBase } from "../../shared/layouts";
import { PeopleService } from "../../shared/services/api/people/PeopleService";

export const People: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce(3000, false);

  const search = useMemo(() => {
    return searchParams.get('search') || '';
  }, [searchParams]);

  useEffect(() => {
    debounce(() => {
      PeopleService.getAll(1, search).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          console.log(result);
        }
      });
    });
  }, [search]);

  return (
    <LayoutBase
      titulo="Listagem de Pessoas"
      barraDeFerramentas={
        <ToolbarList
          showInputSearch
          textButtonNew="Novo"
          textSearch={search}
          onEditTextSearch={texto => setSearchParams({ search: texto}, { replace: true })}
        />
      }
    ></LayoutBase>
  );
};
