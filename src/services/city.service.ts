import api from './api';

export interface IDataParams {
  id: number;
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

export const getCities = async (): Promise<IDataParams[]> => {
  const { data } = await api.get('/cities');
  return data;
};
