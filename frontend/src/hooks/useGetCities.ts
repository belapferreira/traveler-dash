import { useState, useEffect } from 'react';

import { getCities, ICityParams } from '@/services/city.service';

function useGetCities(): ICityParams[] {
  const [cities, setCities] = useState<ICityParams[]>([]);

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
