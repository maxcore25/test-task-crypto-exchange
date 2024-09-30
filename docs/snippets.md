List of available currencies:

```tsx
import { axiosInstance } from '@/api';
import { useEffect } from 'react';

useEffect(() => {
  const fetchData = async () => {
    const res = await axiosInstance.get(
      '/currencies?active=true&fixedRate=true'
    );
    console.log(res.data);
  };

  fetchData();
}, []);
```
