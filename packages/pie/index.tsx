/*
 * @Author: wusimin wusimin@kuaishou.com
 * @Date: 2024-06-26 15:47:00
 * @LastEditors: wusimin wusimin@kuaishou.com
 * @LastEditTime: 2024-06-26 17:02:44
 * @FilePath: /kwaida/packages/kwaida-charts/packages/bar/index.tsx
 * @Description: 饼图
 */

import Chart from './src';
import { withInstall } from '../utils';

const PieChart = withInstall<typeof Chart>(Chart);

export { PieChart };
export default PieChart;