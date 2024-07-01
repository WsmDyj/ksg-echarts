import { ChartCommonOption } from '../../types/echarts';
import { Option, KsgChartsData, KsgChartsProps } from '../../types';
import { PieSeriesOption } from 'echarts/charts';
import { ComposeOption } from 'echarts/core';
import { ECBasicOption } from 'echarts/types/dist/shared';

type PieChartOptions = ComposeOption<PieSeriesOption | ChartCommonOption>;
export default class PieHelper {
    $props: KsgChartsProps;
    data: KsgChartsData;
    option: Option;
    constructor(props: any);
    getPieDataset(): any[];
    getPieSeries(): PieChartOptions[];
    getChartOption(): ECBasicOption;
}
export {};
