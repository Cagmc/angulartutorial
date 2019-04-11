import { ListMeta } from './list-meta.interface';

export interface QueryResponse<T> {
    status: string;
    meta: ListMeta;
    data: T;
}
