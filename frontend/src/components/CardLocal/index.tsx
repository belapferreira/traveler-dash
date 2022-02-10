import React, { AnchorHTMLAttributes } from 'react';
import Image from 'next/image';
import { StarRounded } from '@material-ui/icons';

import ManageButtons from '@/components/ManageButtons';
import { categoryIcon } from '@/utils/categoryIcon';

import Container from '@/styles/components/CardLocal';

export type ICardProps = AnchorHTMLAttributes<HTMLButtonElement> & {
  picture: string;
  name: string;
  category: string;
  rate: number;
  hrefEdit: string;
  hrefDelete: string;
};

function CardLocal({
  picture,
  name,
  category,
  rate,
  href,
  hrefEdit,
  hrefDelete,
}: ICardProps) {
  let Icon = categoryIcon(category);

  return (
    <Container>
      <a href={href}>
        <div id="rate">
          <StarRounded />
          <span>{rate === 0 ? '-' : rate}</span>
        </div>
        <div id="manage">
          <Image src={picture} layout="fill" objectFit="cover" />

          <div id="buttons">
            <ManageButtons hrefEdit={hrefEdit} hrefDelete={hrefDelete} />
          </div>
        </div>

        <div id="name">
          <h2>{name}</h2>
        </div>

        <div id="category">
          <span>{category}</span>

          <Icon />
        </div>
      </a>
    </Container>
  );
}

export default CardLocal;
