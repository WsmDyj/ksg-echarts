import Chart from './chart';
import { withInstall } from '../utils';

const KsgPieChart = withInstall<typeof Chart>(Chart);

export { KsgPieChart };
export default KsgPieChart;