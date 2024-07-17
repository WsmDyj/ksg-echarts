import Chart from './src';
import { withInstall } from '../utils';
import usePieChart from './src/usePieChart';

const KsgPieChart = withInstall<typeof Chart>(Chart);

export { KsgPieChart, usePieChart };
export default KsgPieChart;