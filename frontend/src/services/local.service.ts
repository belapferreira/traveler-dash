import { api } from './api';

export interface ILocalParams {
  id?: number;
  createdAt: Date;
  udatedAt: Date;
  name: string;
  city: string;
  description: string;
  category: string;
  rate: number;
  picture: string;
  status: string;
  phone: string;
  address: string;
  slug: string;
}

export const createLocal = async (
  dataParams: ILocalParams,
): Promise<ILocalParams> => {
  const { data } = await api.post('/local', { ...dataParams });
  return data;
};

export const getLocals = async (): Promise<ILocalParams[]> => {
  const { data } = await api.get('/local');
  return data;
};

export const getLocalsByCity = async (
  city: string,
): Promise<ILocalParams[]> => {
  const { data } = await api.get(`/local?city=${city}`);
  return data;
};
