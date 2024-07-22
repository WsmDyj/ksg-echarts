import { App, Ref } from "vue";
export * from './echarts'
export * from './loading'

import { init } from 'echarts/core';
import { EChartsOption, type SetOptionOpts } from 'echarts';

type InitType = typeof init;
export type Injection<T> = T | null | Ref<T | null> | { value: T | null };

export type EChartsType = ReturnType<InitType>;
export type InitParameters = Parameters<InitType>;

export type Option = EChartsOption;
export type InitOptionsInjection = Injection<InitOptions>;
export type Theme = NonNullable<InitParameters[1]>;
export type InitOptions = NonNullable<InitParameters[2]>;
export type ThemeInjection = Injection<Theme>;
export type UpdateOptionsInjection = Injection<UpdateOptions>;
export type LoadingOptions = {
  text?: string;
  textColor?: string;
  fontSize?: number | string;
  fontWeight?: number | string;
  fontStyle?: string;
  fontFamily?: string;
  maskColor?: string;
  showSpinner?: boolean;
  color?: string;
  spinnerRadius?: number;
  lineWidth?: number;
  zlevel?: number;
};
export type AnyRecord = Record<string, any>;

export type UpdateOptions = SetOptionOpts;

export type WithInstall<T> = T & {
  install(app: App): void;
};

export type DataAtom = {
  name: string;
  data: Array<string | number | Array<string | number>>;
};

export type RadarIndicator = {
  name: string;
  max?: number;
  min?: number;
  color?: string;
};


export type KsgChartsData = AnyRecord[];

