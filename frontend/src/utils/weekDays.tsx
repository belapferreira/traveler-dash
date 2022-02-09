import React from 'react';

function weekDay(day: string) {
  let dayOfWeek;

  if (day === 'sunday') {
    dayOfWeek = 'Domingo';
  } else if (day === 'monday') {
    dayOfWeek = 'Segunda';
  } else if (day === 'tuesday') {
    dayOfWeek = 'Terça';
  } else if (day === 'wednesday') {
    dayOfWeek = 'Quarta';
  } else if (day === 'thursday') {
    dayOfWeek = 'Quinta';
  } else if (day === 'friday') {
    dayOfWeek = 'Sexta';
  } else if (day === 'saturday') {
    dayOfWeek = 'Sábado';
  }
  return dayOfWeek;
}

export { weekDay };
