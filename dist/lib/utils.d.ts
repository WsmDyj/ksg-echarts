import { App } from 'vue';
import { WithInstall, KsgChartsData, AnyRecord } from './types';

export declare const withInstall: <T>(comp: T) => T & {
    install(app: App<any>): void;
} & Plugin;
export declare const getDataset: (data: KsgChartsData, settings?: AnyRecord, options?: any) => {
    dimensions: any[];
    source: {
        [x: string]: (string | number | (string | number)[])[];
    };
};
