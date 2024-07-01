import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase, App } from 'vue';
import { KsgDataset, LoadingOptions, Theme } from '../types';
import { ECBasicOption, EChartsInitOpts } from 'echarts/types/dist/shared';
import { SetOptionOpts } from 'echarts/types/dist/echarts';
declare const PieChart: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        data: PropType<KsgDataset>;
    }>>, () => any, unknown, {}, {}, ComponentOptionsMixin, {
        new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
            loading: BooleanConstructor;
            loadingOptions: PropType<LoadingOptions>;
            autoresize: {
                type: PropType<boolean | {
                    throttle?: number;
                    onResize?: () => void;
                }>;
                default: boolean;
            };
            option: PropType<ECBasicOption>;
            theme: {
                type: PropType<Theme>;
            };
            initOptions: PropType<EChartsInitOpts>;
            updateOptions: PropType<SetOptionOpts>;
            group: StringConstructor;
            manualUpdate: BooleanConstructor;
        }>>, () => any, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
            loading: BooleanConstructor;
            loadingOptions: PropType<LoadingOptions>;
            autoresize: {
                type: PropType<boolean | {
                    throttle?: number;
                    onResize?: () => void;
                }>;
                default: boolean;
            };
            option: PropType<ECBasicOption>;
            theme: {
                type: PropType<Theme>;
            };
            initOptions: PropType<EChartsInitOpts>;
            updateOptions: PropType<SetOptionOpts>;
            group: StringConstructor;
            manualUpdate: BooleanConstructor;
        }>>, {
            loading: boolean;
            autoresize: boolean;
            manualUpdate: boolean;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly< ExtractPropTypes<{
            loading: BooleanConstructor;
            loadingOptions: PropType<LoadingOptions>;
            autoresize: {
                type: PropType<boolean | {
                    throttle?: number;
                    onResize?: () => void;
                }>;
                default: boolean;
            };
            option: PropType<ECBasicOption>;
            theme: {
                type: PropType<Theme>;
            };
            initOptions: PropType<EChartsInitOpts>;
            updateOptions: PropType<SetOptionOpts>;
            group: StringConstructor;
            manualUpdate: BooleanConstructor;
        }>>, () => any, {}, {}, {}, {
            loading: boolean;
            autoresize: boolean;
            manualUpdate: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & ComponentOptionsBase<Readonly< ExtractPropTypes<{
        loading: BooleanConstructor;
        loadingOptions: PropType<LoadingOptions>;
        autoresize: {
            type: PropType<boolean | {
                throttle?: number;
                onResize?: () => void;
            }>;
            default: boolean;
        };
        option: PropType<ECBasicOption>;
        theme: {
            type: PropType<Theme>;
        };
        initOptions: PropType<EChartsInitOpts>;
        updateOptions: PropType<SetOptionOpts>;
        group: StringConstructor;
        manualUpdate: BooleanConstructor;
    }>>, () => any, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
        loading: boolean;
        autoresize: boolean;
        manualUpdate: boolean;
    }, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & {
        install(app: App<any>): void;
    } & Plugin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        data: PropType<KsgDataset>;
    }>>, {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    } & {
        P: Readonly< ExtractPropTypes<{
            loading: BooleanConstructor;
            loadingOptions: PropType<LoadingOptions>;
            autoresize: {
                type: PropType<boolean | {
                    throttle?: number;
                    onResize?: () => void;
                }>;
                default: boolean;
            };
            option: PropType<ECBasicOption>;
            theme: {
                type: PropType<Theme>;
            };
            initOptions: PropType<EChartsInitOpts>;
            updateOptions: PropType<SetOptionOpts>;
            group: StringConstructor;
            manualUpdate: BooleanConstructor;
        }>>;
        B: () => any;
        D: {};
        C: {};
        M: {};
        Defaults: {
            loading: boolean;
            autoresize: boolean;
            manualUpdate: boolean;
        };
    }, Readonly< ExtractPropTypes<{
        loading: BooleanConstructor;
        loadingOptions: PropType<LoadingOptions>;
        autoresize: {
            type: PropType<boolean | {
                throttle?: number;
                onResize?: () => void;
            }>;
            default: boolean;
        };
        option: PropType<ECBasicOption>;
        theme: {
            type: PropType<Theme>;
        };
        initOptions: PropType<EChartsInitOpts>;
        updateOptions: PropType<SetOptionOpts>;
        group: StringConstructor;
        manualUpdate: BooleanConstructor;
    }>> & Readonly< ExtractPropTypes<{
        data: PropType<KsgDataset>;
    }>>, (() => any) & (() => any), {}, {}, {}, {
        loading: boolean;
        autoresize: boolean;
        manualUpdate: boolean;
    } & {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    data: PropType<KsgDataset>;
}>>, () => any, unknown, {}, {}, ComponentOptionsMixin, {
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        loading: BooleanConstructor;
        loadingOptions: PropType<LoadingOptions>;
        autoresize: {
            type: PropType<boolean | {
                throttle?: number;
                onResize?: () => void;
            }>;
            default: boolean;
        };
        option: PropType<ECBasicOption>;
        theme: {
            type: PropType<Theme>;
        };
        initOptions: PropType<EChartsInitOpts>;
        updateOptions: PropType<SetOptionOpts>;
        group: StringConstructor;
        manualUpdate: BooleanConstructor;
    }>>, () => any, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        loading: BooleanConstructor;
        loadingOptions: PropType<LoadingOptions>;
        autoresize: {
            type: PropType<boolean | {
                throttle?: number;
                onResize?: () => void;
            }>;
            default: boolean;
        };
        option: PropType<ECBasicOption>;
        theme: {
            type: PropType<Theme>;
        };
        initOptions: PropType<EChartsInitOpts>;
        updateOptions: PropType<SetOptionOpts>;
        group: StringConstructor;
        manualUpdate: BooleanConstructor;
    }>>, {
        loading: boolean;
        autoresize: boolean;
        manualUpdate: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        loading: BooleanConstructor;
        loadingOptions: PropType<LoadingOptions>;
        autoresize: {
            type: PropType<boolean | {
                throttle?: number;
                onResize?: () => void;
            }>;
            default: boolean;
        };
        option: PropType<ECBasicOption>;
        theme: {
            type: PropType<Theme>;
        };
        initOptions: PropType<EChartsInitOpts>;
        updateOptions: PropType<SetOptionOpts>;
        group: StringConstructor;
        manualUpdate: BooleanConstructor;
    }>>, () => any, {}, {}, {}, {
        loading: boolean;
        autoresize: boolean;
        manualUpdate: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    loading: BooleanConstructor;
    loadingOptions: PropType<LoadingOptions>;
    autoresize: {
        type: PropType<boolean | {
            throttle?: number;
            onResize?: () => void;
        }>;
        default: boolean;
    };
    option: PropType<ECBasicOption>;
    theme: {
        type: PropType<Theme>;
    };
    initOptions: PropType<EChartsInitOpts>;
    updateOptions: PropType<SetOptionOpts>;
    group: StringConstructor;
    manualUpdate: BooleanConstructor;
}>>, () => any, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    loading: boolean;
    autoresize: boolean;
    manualUpdate: boolean;
}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & {
    install(app: App<any>): void;
} & Plugin, {}, string, {}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & {
    install(app: App<any>): void;
} & Plugin;
export { PieChart };
export default PieChart;
