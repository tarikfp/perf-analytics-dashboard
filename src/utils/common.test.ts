import { API_DATA } from '../../__mocks__';
import { resourceTableHeaderRows } from '../components/data-table/table-columns';
import { PerformanceResourceTimingHandler } from '../types';
import {
  convertToSec,
  findDisplayNameFromKey,
  parsePerformanceResourceTimingData,
  takeFirstDigits,
} from './common';

describe('tests for common utility functions', () => {
  test('converts ms to seconds', () => {
    expect(convertToSec(1000)).toBe(1);
  });

  test('takes first 3 digits after decimal point', () => {
    expect(takeFirstDigits(1.123456789)).toBe(1.123);
  });

  test('find display name from key', () => {
    expect(
      findDisplayNameFromKey<PerformanceResourceTimingHandler>(
        API_DATA[0].resources[0],
        resourceTableHeaderRows,
      ),
    ).toStrictEqual([
      'Duration (sec)',
      'Initiator type',
      'Name',
      'Response end (sec)',
      'Transfer size (octet)',
      'Start time (sec)',
    ]);
  });

  test('parses performance resource timing data', () => {
    const perfResourcesData = API_DATA[0]
      .resources as PerformanceResourceTimingHandler[];

    expect(parsePerformanceResourceTimingData(perfResourcesData)).toStrictEqual<
      PerformanceResourceTimingHandler[]
    >(
      perfResourcesData.map((item) => ({
        ...item,
        responseEnd: takeFirstDigits(convertToSec(item.responseEnd)),
        duration: takeFirstDigits(convertToSec(item.duration)),
        startTime: takeFirstDigits(convertToSec(item.startTime)),
      })),
    );
  });
});
