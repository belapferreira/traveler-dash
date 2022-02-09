import { useState, useEffect } from 'react';

import { getLocals, ILocalParams } from '@/services/local.service';

function useGetLocals(): ILocalParams[] {
  const [locals, setLocals] = useState<ILocalParams[]>([]);

  useEffect(() => {
    async function loadLocals() {
      const data = await getLocals();
      setLocals(data);
    }

    loadLocals();
  }, []);

  return locals;
}

export { useGetLocals };
