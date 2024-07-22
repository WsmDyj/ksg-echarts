
import Chart from './chart';
import { withInstall } from '../utils';

const KsgLineChart = withInstall<typeof Chart>(Chart);

export { KsgLineChart };
export default KsgLineChart;