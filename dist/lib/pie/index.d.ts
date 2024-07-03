import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase, App } from 'vue';
import { KsgChartsData, Theme, LoadingOptions } from '..';
import { EChartsOption, SetOptionOpts } from 'echarts/types/dist/echarts';
import { EChartsInitOpts } from 'echarts/types/dist/shared';
import { AutoresizeProp } from '../base/props';
declare const KsgPieChart: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        data: PropType<KsgChartsData>;
    }>>, () => any, unknown, {}, {}, ComponentOptionsMixin, {
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
    } & Plugin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        data: PropType<KsgChartsData>;
    }>>, {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    } & {
        P: Readonly< ExtractPropTypes<{
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
        }>>;
        B: () => any;
        D: {};
        C: {};
        M: {};
        Defaults: {
            loading: boolean;
            autoresize: boolean;
            manualUpdate: boolean;
            height: string | number;
            width: string | number;
        };
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
    }>> & Readonly< ExtractPropTypes<{
        data: PropType<KsgChartsData>;
    }>>, (() => any) & (() => any), {}, {}, {}, {
        loading: boolean;
        autoresize: boolean;
        manualUpdate: boolean;
        height: string | number;
        width: string | number;
    } & {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    data: PropType<KsgChartsData>;
}>>, () => any, unknown, {}, {}, ComponentOptionsMixin, {
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
} & Plugin, {}, string, {}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & {
    install(app: App<any>): void;
} & Plugin;
export { KsgPieChart };
export default KsgPieChart;
