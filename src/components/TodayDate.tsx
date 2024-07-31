
import React from 'react';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import Typography from './Typography';

dayjs.extend(advancedFormat);

const TodayDate = () => {
  return <Typography>Today is {dayjs().format('MMM Do, YYYY')}</Typography>;
};

export default TodayDate;
