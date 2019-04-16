import { IListMeta } from './list-meta.interface';

export interface IQueryResponse<T> {
    status: string;
    meta: IListMeta;
    data: T;
}
