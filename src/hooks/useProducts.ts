import type { Product } from '@/types/product';

import useSWR from 'swr';

import { fetcher } from '@/libs/axios/fetcher';

export const useProducts = () => {
  const { data, error } = useSWR<{ products: Product[] }>(
    'https://dummyjson.com/products',
    fetcher
  );

  return {
    data: data?.products || [],
    loading: !error && !data,
  };
};
