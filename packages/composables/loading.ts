import { PropType } from 'vue';
import { LoadingOptions } from '../types';

export const loadingProps = {
  loading: Boolean,
  loadingOptions: Object as PropType<LoadingOptions>
};
