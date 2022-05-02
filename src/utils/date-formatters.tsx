import * as dayjs from 'dayjs';

// date formatters

const formatTooltipDate = (date: string): string =>
  dayjs(date).format('YYYY/MM/DD HH:mm:ss');

const formatAxisDate = (date: string): string => dayjs(date).format('HH:mm:ss');

const formatParamDate = (date: Date): string =>
  dayjs(date).format('YYYY-MM-DD HH:mm');

const formatTableDate = (date: Date | number): string =>
  dayjs(date).format('YYYY-MM-DD HH:mm:ss');

export { formatAxisDate, formatParamDate, formatTableDate, formatTooltipDate };
