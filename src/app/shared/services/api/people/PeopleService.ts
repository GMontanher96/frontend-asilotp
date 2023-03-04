import { Enviroment } from "../../../environment";
import { Api } from "../axios-config";

interface IListingPeople {
    id: number;
    name: string;
    surname: string;
    birth_date: number;
    cpf: string;
    rg: string
}

interface IDetailPeople {
    id: number;
    email: string;
    surname: string;
    cidadeId: number;
}

type TPeopleTotalCount = {
    data: IListingPeople[];
    totalCount: number;
}

const getAll = async (page = 1, filter = ''): Promise<TPeopleTotalCount | Error> => {
    try {
      const urlRelativa = `/people?_page=${page}&_limit=${Enviroment.LIMIT_ROW}&name_like=${filter}`;
  
      const { data, headers } = await Api.get(urlRelativa);
  
      if (data) {
        return {
          data,
          totalCount: Number(headers['x-total-count'] || Enviroment.LIMIT_ROW),
        };
      }
  
      return new Error('Erro ao listar os registros.');
    } catch (error) {
      console.error(error);
      return new Error((error as { message: string }).message || 'Erro ao listar os registros.');
    }
  };

  const getById = async (id: number): Promise<IDetailPeople | Error> => {
    try {
      const { data } = await Api.get(`/people/${id}`);
  
      if (data) {
        return data;
      }
  
      return new Error('Erro ao consultar o registro.');
    } catch (error) {
      console.error(error);
      return new Error((error as { message: string }).message || 'Erro ao consultar o registro.');
    }
  };
  
  const create = async (dados: Omit<IDetailPeople, 'id'>): Promise<number | Error> => {
    try {
      const { data } = await Api.post<IDetailPeople>('/people', dados);
  
      if (data) {
        return data.id;
      }
  
      return new Error('Erro ao criar o registro.');
    } catch (error) {
      console.error(error);
      return new Error((error as { message: string }).message || 'Erro ao criar o registro.');
    }
  };
  
  const updateById = async (id: number, dados: IDetailPeople): Promise<void | Error> => {
    try {
      await Api.put(`/people/${id}`, dados);
    } catch (error) {
      console.error(error);
      return new Error((error as { message: string }).message || 'Erro ao atualizar o registro.');
    }
  };
  
  const deleteById = async (id: number): Promise<void | Error> => {
    try {
      await Api.delete(`/people/${id}`);
    } catch (error) {
      console.error(error);
      return new Error((error as { message: string }).message || 'Erro ao apagar o registro.');
    }
  };
  

export const PeopleService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
};
