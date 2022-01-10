import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  LocationOnOutlined,
  DashboardOutlined,
  ChatBubbleOutlineOutlined,
  PowerSettingsNewOutlined,
} from '@material-ui/icons';

import TravelerIcon from '@/../public/images/traveler-icon.svg';

import Container from '@/styles/components/Sidebar';

function Sidebar() {
  const router = useRouter();

  return (
    <Container>
      <Image src={TravelerIcon} />

      <nav>
        <button
          onClick={() => router.push('/city')}
          className={
            router.pathname.includes('/city') ? 'clicked' : 'noClicked'
          }
        >
          <LocationOnOutlined />
        </button>
        <button
          onClick={() => router.push('/category')}
          className={
            router.pathname.includes('/category') ? 'clicked' : 'noClicked'
          }
        >
          <DashboardOutlined />
        </button>
        <button
          onClick={() => router.push('/feedback')}
          className={
            router.pathname.includes('/feedback') ? 'clicked' : 'noClicked'
          }
        >
          <ChatBubbleOutlineOutlined />
        </button>
      </nav>

      <button onClick={() => router.push('/')}>
        <PowerSettingsNewOutlined />
      </button>
    </Container>
  );
}

export default Sidebar;
