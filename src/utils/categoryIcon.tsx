import React from 'react';

import {
  LocalSeeOutlined,
  FreeBreakfastOutlined,
  CalendarTodayOutlined,
} from '@material-ui/icons';

function categoryIcon(category: string) {
  let Icon;

  if (category === 'Pontos turísticos') {
    Icon = LocalSeeOutlined;
  } else if (category === 'Comidas e bebidas') {
    Icon = FreeBreakfastOutlined;
  } else {
    Icon = CalendarTodayOutlined;
  }

  return Icon;
}

export { categoryIcon };
