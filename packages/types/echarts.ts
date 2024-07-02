/*
 * @Author: wusimin 
 * @Date: 2024-06-26 17:59:18
 * @LastEditors: wusimin 
 * @LastEditTime: 2024-06-27 10:24:18
 * @FilePath: /kwaida/packages/kwaida-charts/packages/types/echarts.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  GridComponentOption,
  LegendComponentOption,
  AriaComponentOption,
  AxisPointerComponentOption,
  BrushComponentOption,
  CalendarComponentOption,
  DatasetComponentOption,
  GeoComponentOption,
  GraphicComponentOption,
  ParallelComponentOption,
  PolarComponentOption,
  SingleAxisComponentOption,
  TimelineComponentOption,
  TitleComponentOption,
  TooltipComponentOption
} from 'echarts/components';

import {
  AngleAxisOption,
  DataZoomComponentOption,
  ParallelCoordinateSystemOption,
  RadarOption,
  RadiusAxisOption,
  SeriesOption,
  ToolboxComponentOption,
  TooltipOption,
  VisualMapComponentOption,
  XAXisOption,
  YAXisOption
} from 'echarts/types/dist/shared';

export type ChartCommonOption =
  | GridComponentOption
  | TitleComponentOption
  | TooltipComponentOption
  | LegendComponentOption;

  export type ECSetOption = {
    readonly aria: AriaComponentOption;
    readonly axisPointer: AxisPointerComponentOption;
    readonly brush: BrushComponentOption;
    readonly calendar: CalendarComponentOption;
    readonly dataset: DatasetComponentOption;
    readonly geo: GeoComponentOption;
    readonly graphic: GraphicComponentOption;
    readonly grid: GridComponentOption;
    readonly legend: LegendComponentOption;
    readonly parallel: ParallelComponentOption;
    readonly polar: PolarComponentOption;
    readonly singleAxis: SingleAxisComponentOption;
    readonly timeline: TimelineComponentOption;
    readonly title: TitleComponentOption;
    readonly angleAxis: AngleAxisOption;
    readonly dataZoom: DataZoomComponentOption;
    readonly parallelAxis: ParallelCoordinateSystemOption;
    readonly radar: RadarOption;
    readonly radiusAxis: RadiusAxisOption;
    readonly series: SeriesOption;
    readonly toolbox: ToolboxComponentOption;
    readonly tooltip: TooltipOption;
    readonly visualMap: VisualMapComponentOption;
    readonly xAxis: XAXisOption;
    readonly yAxis: YAXisOption;
  };
