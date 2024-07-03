import { InjectionKey, Ref, CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase, App } from 'vue';
import { InitOptionsInjection, LoadingOptions, ThemeInjection, UpdateOptionsInjection, Theme } from '../types';
import { EChartsOption, SetOptionOpts } from 'echarts/types/dist/echarts';
import { EChartsInitOpts } from 'echarts/types/dist/shared';
import { AutoresizeProp } from './props';

declare const KsgBaseChart: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        option: PropType<EChartsOption>;
        theme: {
            type: PropType<Theme>;
        };
        palette: {
            type: PropType<string[]>;
        };
        initOptions: PropType<EChartsInitOpts>;
        updateOptions: PropType<SetOptionOpts>;
        group: StringConstructor;
        manualUpdate: BooleanConstructor;
        autoresize: {
            type: PropType<AutoresizeProp>;
            default: boolean;
        };
        loading: BooleanConstructor;
        loadingOptions: PropType<LoadingOptions>;
        emptyText: StringConstructor;
        height: {
            type: PropType<string | number>;
            default: string;
        };
        width: {
            type: PropType<string | number>;
            default: string;
        };
    }>>, () => any, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        option: PropType<EChartsOption>;
        theme: {
            type: PropType<Theme>;
        };
        palette: {
            type: PropType<string[]>;
        };
        initOptions: PropType<EChartsInitOpts>;
        updateOptions: PropType<SetOptionOpts>;
        group: StringConstructor;
        manualUpdate: BooleanConstructor;
        autoresize: {
            type: PropType<AutoresizeProp>;
            default: boolean;
        };
        loading: BooleanConstructor;
        loadingOptions: PropType<LoadingOptions>;
        emptyText: StringConstructor;
        height: {
            type: PropType<string | number>;
            default: string;
        };
        width: {
            type: PropType<string | number>;
            default: string;
        };
    }>>, {
        loading: boolean;
        autoresize: boolean;
        manualUpdate: boolean;
        height: string | number;
        width: string | number;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        option: PropType<EChartsOption>;
        theme: {
            type: PropType<Theme>;
        };
        palette: {
            type: PropType<string[]>;
        };
        initOptions: PropType<EChartsInitOpts>;
        updateOptions: PropType<SetOptionOpts>;
        group: StringConstructor;
        manualUpdate: BooleanConstructor;
        autoresize: {
            type: PropType<AutoresizeProp>;
            default: boolean;
        };
        loading: BooleanConstructor;
        loadingOptions: PropType<LoadingOptions>;
        emptyText: StringConstructor;
        height: {
            type: PropType<string | number>;
            default: string;
        };
        width: {
            type: PropType<string | number>;
            default: string;
        };
    }>>, () => any, {}, {}, {}, {
        loading: boolean;
        autoresize: boolean;
        manualUpdate: boolean;
        height: string | number;
        width: string | number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    option: PropType<EChartsOption>;
    theme: {
        type: PropType<Theme>;
    };
    palette: {
        type: PropType<string[]>;
    };
    initOptions: PropType<EChartsInitOpts>;
    updateOptions: PropType<SetOptionOpts>;
    group: StringConstructor;
    manualUpdate: BooleanConstructor;
    autoresize: {
        type: PropType<AutoresizeProp>;
        default: boolean;
    };
    loading: BooleanConstructor;
    loadingOptions: PropType<LoadingOptions>;
    emptyText: StringConstructor;
    height: {
        type: PropType<string | number>;
        default: string;
    };
    width: {
        type: PropType<string | number>;
        default: string;
    };
}>>, () => any, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    loading: boolean;
    autoresize: boolean;
    manualUpdate: boolean;
    height: string | number;
    width: string | number;
}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & {
    install(app: App<any>): void;
} & Plugin;
export { KsgBaseChart };
export default KsgBaseChart;
export declare const INIT_OPTIONS_KEY: InjectionKey<InitOptionsInjection>;
export declare const LOADING_OPTIONS_KEY: InjectionKey<LoadingOptions | Ref<LoadingOptions>>;
export declare const THEME_KEY: InjectionKey<ThemeInjection>;
export declare const UPDATE_OPTIONS_KEY: InjectionKey<UpdateOptionsInjection>;
export declare const PALETTE_KEY: InjectionKey<string[]>;
