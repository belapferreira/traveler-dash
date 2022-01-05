import { useState, useEffect } from 'react';

import { getCities, IDataParams } from '@/services/city.service';

function useGetCities(): IDataParams[] {
  const [cities, setCities] = useState<IDataParams[]>([]);

  useEffect(() => {
    async function loadCities() {
      const data = await getCities();
      setCities(data);
    }

    loadCities();
  }, []);

  return cities;
}

export { useGetCities };
