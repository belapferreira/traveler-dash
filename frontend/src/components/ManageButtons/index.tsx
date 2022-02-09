import React, { AnchorHTMLAttributes } from 'react';
import { EditOutlined, DeleteOutlined } from '@material-ui/icons';

import Container from '@/styles/components/ManageButtons';

export type IManageButtonsProps = AnchorHTMLAttributes<HTMLButtonElement> & {
  hrefEdit: string;
  hrefDelete: string;
};

function ManageButtons({ hrefEdit, hrefDelete }: IManageButtonsProps) {
  return (
    <Container>
      <a href={hrefEdit} id="edit">
        <EditOutlined />
      </a>

      <a href={hrefDelete} id="delete">
        <DeleteOutlined />
      </a>
    </Container>
  );
}

export default ManageButtons;
