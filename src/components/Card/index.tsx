import React, { AnchorHTMLAttributes } from 'react';
import Image from 'next/image';
import { EditOutlined, DeleteOutlined } from '@material-ui/icons';

import Container from '../../styles/components/Card';

export type ICardProps = AnchorHTMLAttributes<HTMLButtonElement> & {
  picture: StaticImageData;
  city: string;
  count: number;
};

function Card({ picture, city, count, href }: ICardProps) {
  return (
    <Container>
      <a href={href}>
        <div id="manage">
          <Image src={picture} layout="responsive" objectFit="cover" />
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
