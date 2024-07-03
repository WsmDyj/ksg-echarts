import { App } from 'vue';
import { Injection, WithInstall } from './types';

export declare const withInstall: <T>(comp: T) => T & {
    install(app: App<any>): void;
} & Plugin;
export declare function unwrapInjected<T, V>(injection: Injection<T>, defaultValue: V): T | V | {
    value: T;
};
