import api from './api';

export interface ICityParams {
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

export const getCities = async (): Promise<ICityParams[]> => {
  const { data } = await api.get('/cities');
  return data;
};

export const getCityBySlug = async (
  slug: string | string[] | undefined,
): Promise<ICityParams[]> => {
  const { data } = await api.get(`/cities?slug=${slug}`);
  return data;
};
