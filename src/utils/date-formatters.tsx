import * as dateFns from 'date-fns';

// date formatters

const formatAxisDate = (date: string): string =>
  dateFns.format(new Date(date), 'HH:mm:ss');

const formatParamDate = (date: Date): string =>
  dateFns.format(date, 'yyyy-MM-dd HH:mm');

const formatTableDate = (date: string): string =>
  dateFns.format(new Date(date), 'yyyy-MM-dd HH:mm:ss');

export { formatAxisDate, formatParamDate, formatTableDate };
