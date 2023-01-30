import { DataInfoType, DataIdentyficationType, DataSourceItemType } from '../type/type';

export interface IntData {
    status: string;
    totalResults: number;
    articles: Array<IntDataItem>;
}

export interface IntDataSource {
    status: string;
    sources: Array<DataSourceItemType>;
}

export interface IntDataItem extends Partial<DataInfoType> {
    source: DataIdentyficationType;
    title: string;
    url: string;
    publishedAt: string;
    content: string;
    description: string;
}

export interface IntKey {
    apiKey: string;
}

export interface IntUrlOptions {
    [optionName: string]: string;
}
