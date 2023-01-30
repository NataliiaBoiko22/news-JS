import { IntData, IntDataSource } from '../interface/interface';

export type DataInfoType = Record<'urlToImage' | 'author', 'string | null'>;

export type DataIdentyficationType = {
    id: 'string | null';
    name: 'string | null';
};

export type DataSourceItemType = Record<
    'id' | 'name' | 'category' | 'language' | 'country' | 'description' | 'url',
    'string'
>;

export type OptionsType<Type> = { [key: string]: Type };

export type AllDataType = IntData | IntDataSource;
