import React from 'react';
import Image from 'next/image';
import { EditOutlined, DeleteOutlined } from '@material-ui/icons';

import Container from '../../styles/components/Card';

interface ICardProps {
  picture: StaticImageData;
  city: string;
  count: number;
}

function Card({ picture, city, count }: ICardProps) {
  return (
    <Container>
      <div id="manage">
        <Image src={picture} layout='responsive' objectFit='cover' />
      </div>

      <div id="details">
        <h2>{city}</h2>
        <span>{count} locais</span>
      </div>
    </Container>
  )
}

export default Card;
