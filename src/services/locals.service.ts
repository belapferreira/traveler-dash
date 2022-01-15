import api from './api';

export interface ILocalParams {
  id?: number;
  createdAt: Date;
  udatedAt: Date;
  name: string;
  city: string;
  type: string;
  category: string;
  rate: number;
  picture: string;
  status: string;
  slug: string;
}

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
