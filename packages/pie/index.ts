/*
 * @Author: wusimin wusimin@kuaishou.com
 * @Date: 2024-06-26 15:47:00
 * @LastEditors: wusimin wusimin@kuaishou.com
 * @LastEditTime: 2024-07-01 22:50:45
 * @FilePath: /kwaida/packages/kwaida-charts/packages/bar/index.tsx
 * @Description: 饼图
 */

import Chart from './src';
import { withInstall } from '../utils';

const KsgPieChart = withInstall<typeof Chart>(Chart);

export { KsgPieChart };
export default KsgPieChart;