import { api } from './api';

export interface ILocalParams {
  id?: number;
  createdAt: Date;
  udatedAt: Date;
  name: string;
  city: string;
  description: string;
  type: string;
  category: string;
  rate: number | null;
  picture: string;
  status: string;
  phone: string;
  address: string;
  opening: IOpening[];
  slug: string;
}

interface IOpening {
  day: string;
  status: string;
  start: number;
  end: number;
}

export const getLocals = async (): Promise<ILocalParams[]> => {
  const { data } = await api.get('/locals');
  return data;
};

export const getLocalsByCity = async (
  city: string,
): Promise<ILocalParams[]> => {
  const { data } = await api.get(`/locals?city=${city}`);
  return data;
};

export const getLocalBySlug = async (slug: string): Promise<ILocalParams[]> => {
  const { data } = await api.get(`/locals?slug=${slug}`);
  return data;
};
