/* eslint-disable arrow-body-style */
import { PerformanceResourceTimingHandler } from '@/types';

// helpers

const convertToSec = (value: number): number => value / 1000;

const takeFirstDigits = (value: number): number => Number(value.toFixed(3));

const findDisplayNameFromKey = <T>(
  data: T,
  arr: Array<{ id: keyof T | string; display: string }>,
): string[] => {
  const keys: string[] = [];
  arr.forEach((x) => {
    if (Object.keys(data).includes(x.id as string)) {
      keys.push(x.display);
    }
  });
  return keys;
};

const parsePerformanceResourceTimingData = (
  data: PerformanceResourceTimingHandler[],
): PerformanceResourceTimingHandler[] => {
  return data.map((item) => ({
    ...item,
    responseEnd: takeFirstDigits(convertToSec(item.responseEnd)),
    duration: takeFirstDigits(convertToSec(item.duration)),
    startTime: takeFirstDigits(convertToSec(item.startTime)),
  }));
};

export {
  takeFirstDigits,
  findDisplayNameFromKey,
  parsePerformanceResourceTimingData,
};
