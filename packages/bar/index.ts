/*
 * @Date: 2024-07-02 18:57:51
 * @LastEditTime: 2024-07-02 18:57:53
 * @FilePath: /ksg-echarts/packages/bar/index.ts
 * @Description: 柱状图
 */

import Chart from './src';
import { withInstall } from '../utils';

const KsgBarChart = withInstall<typeof Chart>(Chart);

export { KsgBarChart };
export default KsgBarChart;