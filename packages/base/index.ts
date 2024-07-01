import { withInstall } from '../utils';
import Chart from './chart';

const KsgBaseChart = withInstall<typeof Chart>(Chart);

export { KsgBaseChart };

export default KsgBaseChart;
