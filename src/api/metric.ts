import { BaseAPIParams, IMetricByDate, Metric } from '../types';
import axiosInstance from './axios.instance';

type MetricByDate = IMetricByDate & BaseAPIParams<Metric[]>;

/**
 * @param params @see {MetricByDate}
 * @description Fetches metrics from the server between given dates
 * @returns {Promise<Metric[]>}
 */
export const fetchMetricsByDate = async (
  params: MetricByDate,
): Promise<Metric[]> => {
  const { endDate, onError, onSuccess, startDate, onLoadingCb } = params;
  try {
    onLoadingCb(true);
    const response = await axiosInstance.get<Metric[]>('/metric-model/date', {
      params: {
        endDate,
        startDate,
      },
    });
    onSuccess(response.data);
    return response.data;
  } catch (err) {
    onError(err);
    return [];
  } finally {
    onLoadingCb(false);
  }
};

/**
 * @param baseParams @see {BaseAPIParams<Metric[]>}
 * @description Fetches all metrics from the server
 * @returns {Promise<Metric[]>}
 */
export const fetchAllMetrics = async (
  baseParams: BaseAPIParams<Metric[]>,
): Promise<Metric[]> => {
  const { onError, onLoadingCb, onSuccess } = baseParams;
  try {
    onLoadingCb(true);
    const response = await axiosInstance.get<Metric[]>('/metric-model');
    onSuccess(response.data);
    return response.data;
  } catch (err) {
    onError(err);
    return [];
  } finally {
    onLoadingCb(false);
  }
};

/**
 * @param baseParams @see {BaseAPIParams<Metric[]>}
 * @description Fetches metrics from the server created within last 30 minutes
 * @returns {Promise<Metric[]>}
 */
export const fetchLatestMetrics = async (
  baseParams: BaseAPIParams<Metric[]>,
): Promise<Metric[]> => {
  const { onError, onLoadingCb, onSuccess } = baseParams;
  try {
    onLoadingCb(true);
    const response = await axiosInstance.get<Metric[]>('/metric-model/latest');
    onSuccess(response.data);
    return response.data;
  } catch (err) {
    onError(err);
    return [];
  } finally {
    onLoadingCb(false);
  }
};
