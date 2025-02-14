import http from '@/api';
import { ResPage, SearchWithPage } from '../interface';
import { Cronjob } from '../interface/cronjob';

export const getCronjobPage = (params: SearchWithPage) => {
    return http.post<ResPage<Cronjob.CronjobInfo>>(`/cronjobs/search`, params);
};

export const addCronjob = (params: Cronjob.CronjobCreate) => {
    return http.post<Cronjob.CronjobCreate>(`/cronjobs`, params);
};

export const editCronjob = (params: Cronjob.CronjobUpdate) => {
    return http.post(`/cronjobs/update`, params);
};

export const deleteCronjob = (params: { ids: number[] }) => {
    return http.post(`/cronjobs/del`, params);
};

export const searchRecords = (params: Cronjob.SearchRecord) => {
    return http.post<ResPage<Cronjob.Record>>(`cronjobs/search/records`, params);
};

export const getRecordDetail = (params: string) => {
    return http.post<string>(`cronjobs/search/detail`, { path: params });
};

export const updateStatus = (params: Cronjob.UpdateStatus) => {
    return http.post(`cronjobs/status`, params);
};

export const download = (params: Cronjob.Download) => {
    return http.download<BlobPart>(`cronjobs/download`, params, { responseType: 'blob' });
};

export const handleOnce = (id: number) => {
    return http.post(`cronjobs/handle`, { id: id });
};
