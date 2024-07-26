import Chart from './chart';
import { withInstall } from '../utils';
const KsgBarChart = withInstall<typeof Chart>(Chart);
export * from './useBarChart'
export { KsgBarChart };
export default KsgBarChart;