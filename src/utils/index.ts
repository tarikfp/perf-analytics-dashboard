import dayjs from 'dayjs';

const formatTooltipDate = (date: string): string =>
  dayjs(date).format('YYYY/MM/DD HH:mm:ss');

const formatAxisDate = (date: string): string => dayjs(date).format('HH:mm:ss');

export { formatAxisDate, formatTooltipDate };
