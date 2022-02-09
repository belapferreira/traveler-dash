import { api } from './api';

export interface ICitiesParams {
  id?: number;
  createdAt: Date;
  udatedAt: Date;
  city: string;
  tourist_attractions: number;
  food_drink: number;
  events: number;
  picture: string;
  description: string;
  detail: string;
  slug: string;
}

export interface ICityParams {
  id?: number;
  createdAt: Date;
  updatedAt: Date;
  city: string;
  picture: string;
  description: string;
  detail: string;
  slug: string;
}

export const getCitiesOne = async (): Promise<ICitiesParams[]> => {
  const { data } = await api.get('/cities');
  return data;
};

/* export const getCityBySlug = async (
  slug: string | string[] | undefined,
): Promise<ICitiesParams[]> => {
  const { data } = await api.get(`/cities?slug=${slug}`);
  return data;
}; */

export const getAllCities = async (): Promise<ICityParams[]> => {
  const { data } = await api.get('/city');
  return data;
};

export const getCityBySlug = async (
  slug: string | string[] | undefined,
): Promise<ICityParams[]> => {
  const { data } = await api.get(`/city?slug=${slug}`);
  return data;
};

export const createCity = async (
  dataParams: ICityParams,
): Promise<ICityParams> => {
  const { data } = await api.post('/city', { ...dataParams });
  return data;
};

export const getCities = async (): Promise<ICityParams[]> => {
  const { data } = await api.get('/city');
  return data;
};
