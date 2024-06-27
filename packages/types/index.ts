import { App, PropType } from "vue";
export * from './echarts'
export * from './loading'
import { init } from 'echarts/core';
import type { SetOptionOpts, ECElementEvent, ElementEvent } from 'echarts';
type InitType = typeof init;
export type EChartsType = ReturnType<InitType>;
type SetOptionType = EChartsType['setOption'];
export type InitParameters = Parameters<InitType>;
export type Option = Parameters<SetOptionType>[0];
export type Theme = NonNullable<InitParameters[1]>;
export type AnyRecord = Record<string, any>;
export type InitOptions = NonNullable<InitParameters[2]>;
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

export interface KsgDataset {
  dimensions: DataAtom | Array<RadarIndicator>;
  measures: Array<DataAtom>;
}

export type KsgChartsData = KsgDataset;


export interface KsgChartsProps {
  data: KsgDataset;
  option: Option;
}