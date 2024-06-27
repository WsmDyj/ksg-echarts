import { withInstall } from '../utils';
import Chart from './chart';

const BaseChart = withInstall<typeof Chart>(Chart);

export { BaseChart };

export default BaseChart;
