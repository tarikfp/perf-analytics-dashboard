import { Metric } from '../../types';
import { formatTableDate, takeFirstDigits } from '../../utils';

interface Column {
  id: keyof Metric;
  label: string;
  minWidth?: number;
  maxWidth?: number;
  align?: 'right' | 'center';
  format?: (value: number) => string;
}

const resourceTableHeaderRows = [
  { id: 'duration', display: 'Duration (sec)' },
  { id: 'initiatorType', display: 'Initiator type' },
  { id: 'name', display: 'Name' },
  { id: 'responseEnd', display: 'Response end (sec)' },
  { id: 'transferSize', display: 'Transfer size (octet)' },
  { id: 'startTime', display: 'Start time (sec)' },
];

const columns: readonly Column[] = [
  {
    id: 'url',
    label: 'URL',
    minWidth: 100,
    align: 'center',
  },

  { id: 'ttfb', label: 'TTFB', minWidth: 100 },
  {
    id: 'fcp',
    label: 'FCP',
    minWidth: 100,
    format: (value: number) => takeFirstDigits(value).toString(),
  },
  {
    id: 'domLoad',
    label: 'Dom load',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'windowLoad',
    label: 'Window load',
    minWidth: 100,
    align: 'right',
  },

  {
    id: 'userAgent',
    label: 'User agent',
    maxWidth: 50,
    align: 'center',
  },

  {
    id: 'createdAt',
    label: 'Created At',
    minWidth: 100,
    align: 'right',
    format: formatTableDate,
  },
];

export { columns, resourceTableHeaderRows };
export type { Column };
