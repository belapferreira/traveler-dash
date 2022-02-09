import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ICityData } from '@/components/AddCity';

interface IDataContext {
  cityData: ICityData;
  setCityData: (newState: ICityData) => void;
  cityImage: File | undefined;
  setCityImage: (newState: File | undefined) => void;
  cityImageURL: string;
  setCityImageURL: (newState: string) => void;
  localImage: File | undefined;
  setLocalImage: (newState: File | undefined) => void;
  localImageURL: string;
  setLocalImageURL: (newState: string) => void;
}

interface IDataContextProps {
  children: ReactNode;
}

export const initialValueContext = {
  cityData: { city: '', cityDescription: '', cityDetails: '' },
  setCityData: () => {},
  cityImage: undefined,
  setCityImage: () => {},
  cityImageURL: '',
  setCityImageURL: () => {},
  localImage: undefined,
  setLocalImage: () => {},
  localImageURL: '',
  setLocalImageURL: () => {},
};

const DataContext = createContext<IDataContext>(initialValueContext);

export default function DataProvider({ children }: IDataContextProps) {
  const [cityData, setCityData] = useState(initialValueContext.cityData);
  const [cityImage, setCityImage] = useState<File | undefined>(undefined);
  const [cityImageURL, setCityImageURL] = useState('');
  const [localImage, setLocalImage] = useState<File | undefined>(undefined);
  const [localImageURL, setLocalImageURL] = useState('');

  return (
    <DataContext.Provider
      value={{
        cityData,
        setCityData,
        cityImage,
        setCityImage,
        cityImageURL,
        setCityImageURL,
        localImage,
        setLocalImage,
        localImageURL,
        setLocalImageURL,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  const {
    cityData,
    setCityData,
    cityImage,
    setCityImage,
    cityImageURL,
    setCityImageURL,
    localImage,
    setLocalImage,
    localImageURL,
    setLocalImageURL,
  } = context;

  return {
    cityData,
    setCityData,
    cityImage,
    setCityImage,
    cityImageURL,
    setCityImageURL,
    localImage,
    setLocalImage,
    localImageURL,
    setLocalImageURL,
  };
}
