import type { Product } from '@/types/product';
import type { FC } from 'react';

import Image from 'next/image';

type Props = {
  product: Product;
};

export const Card: FC<Props> = ({ product }) => {
  return (
    <div className="w-60 space-y-2 rounded border bg-slate-100 p-4">
      <Image
        className="max-h-[160px] rounded object-cover object-center"
        src={product.thumbnail}
        width={999}
        height={999}
        alt={product.title}
      />
      <h3 className="text-xl">{product.title}</h3>
      <p>{product.description}</p>
      <p className="text-right font-bold">$ {product.price}</p>
    </div>
  );
};
