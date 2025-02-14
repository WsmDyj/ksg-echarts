import { InjectionKey, Ref } from 'vue';
import { withInstall } from '../utils';
import Chart from './chart';
import useKsgChart from './hooks/useKsgChart';
import useBaseChart from './hooks/useBaseChart';
import useComputeDataset from './hooks/useComputeDataset';
import {
  InitOptionsInjection,
  LoadingOptions,
  ThemeInjection,
  UpdateOptionsInjection
} from '../types';

const KsgBaseChart = withInstall<typeof Chart>(Chart);

export { KsgBaseChart, useKsgChart, useBaseChart, useComputeDataset };

export default KsgBaseChart;
export * from './props'

// Injection keys
export const INIT_OPTIONS_KEY = 'ecInitOptions' as unknown as InjectionKey<InitOptionsInjection>;
export const LOADING_OPTIONS_KEY = 'ecLoadingOptions' as unknown as InjectionKey<
  LoadingOptions | Ref<LoadingOptions>
>;
export const THEME_KEY = 'ecTheme' as unknown as InjectionKey<ThemeInjection>;
export const UPDATE_OPTIONS_KEY =
  'ecUpdateOptions' as unknown as InjectionKey<UpdateOptionsInjection>;
export const PALETTE_KEY = 'ecPalettes' as unknown as InjectionKey<string[]>;