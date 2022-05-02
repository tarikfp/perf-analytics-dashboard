export type Metric = {
  readonly _id: string;
  readonly ttfb: number;
  readonly fcp: number;
  readonly domLoad: number;
  readonly windowLoad: number;
  readonly resources: PerformanceResourceTimingHandler[];
  readonly userAgent: string | null;
  readonly url: string | null;
  readonly createdAt: string;
};

export interface IMetricByDate {
  readonly startDate: string;
  readonly endDate: string;
}

export interface BaseAPIParams<T = any> {
  readonly onSuccess: (data: T) => void;
  readonly onError: (error: any) => void;
  readonly onLoadingCb: (isLoading: boolean) => void;
}

export type PerformanceResourceTimingHandler = Pick<
  PerformanceResourceTiming,
  | 'name'
  | 'responseEnd'
  | 'initiatorType'
  | 'startTime'
  | 'duration'
  | 'transferSize'
>;

export enum MetricType {
  TTFB = 'ttfb',
  FCP = 'fcp',
  DOM_LOAD = 'domLoad',
  WINDOW_LOAD = 'windowLoad',
}
