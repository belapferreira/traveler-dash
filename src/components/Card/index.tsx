import React, { AnchorHTMLAttributes } from 'react';
import Image from 'next/image';

import ManageButtons from '@/components/ManageButtons';

import Container from '@/styles/components/Card';

export type ICardProps = AnchorHTMLAttributes<HTMLButtonElement> & {
  picture: string;
  city: string;
  count: number;
  hrefEdit: string;
  hrefDelete: string;
};

function Card({
  picture,
  city,
  count,
  href,
  hrefEdit,
  hrefDelete,
}: ICardProps) {
  return (
    <Container>
      <a href={href}>
        <div id="manage">
          <Image
            src={picture}
            layout="responsive"
            objectFit="cover"
            width={256}
            height={159}
          />

          <div id="buttons">
            <ManageButtons hrefEdit={hrefEdit} hrefDelete={hrefDelete} />
          </div>
        </div>

        <div id="details">
          <h2>{city}</h2>
          <span>{count} locais</span>
        </div>
      </a>
    </Container>
  );
}

export default Card;
