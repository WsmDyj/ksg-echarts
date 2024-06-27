import { App } from 'vue';
import { WithInstall, KsgChartsData, AnyRecord } from './types';
import { round, sum, zip, cloneDeep } from 'lodash-es';

export const withInstall = <T>(comp: T): WithInstall<T> & Plugin => {
  const c = comp as any;
  c.install = (app: App) => {
    app.component(c.name, c);
  };

  return c;
};

const validateNumber = (n: any) =>
  !isNaN(parseFloat(n)) && isFinite(n) && Number(n) === n

export const getDataset = (data: KsgChartsData, settings?: AnyRecord, options?: any) => {
  const cloneData = cloneDeep(data);
  if (!cloneData) return
  const dimName = Array.isArray(cloneData?.dimensions) ? '' : cloneData?.dimensions.name;
  const dimData = Array.isArray(cloneData?.dimensions) ? [] : cloneData?.dimensions?.data;

  const stack = settings?.stack || null;
  const percentage = settings?.percentage || false;

  // when data is not empty and data.dimensions.data is undefiend
  if (!options?.isEmptyData && dimData === undefined) {
    // Vue.util.warn(`data.dimensions.data is required. Please check on you data`, this)
    return;
  }
  const dimKey = `${dimName}`;
  const headMeasure = dimData.length > 0 && dimData[0];

  const dimValue =
    validateNumber(headMeasure) && options?.chartType === 'pie'
      ? dimData.map((v, i) => (i === 0 ? `${v}` : v))
      : dimData;

  const dimensions = {
    [dimKey]: dimValue
  };

  // let [measures, zipSumed] = [{}, []]
  const measures = {};
  let zipSumed: any[] = [];

  if (stack && percentage && cloneData?.measures.length > 0) {
    const dyadicArray = cloneData?.measures.map((col) => col.data);
    // 横表转竖表 用于计算百分比堆叠图
    const zipped = zip(...dyadicArray);
    zipSumed = zipped.map((v: any) => {
      const arr = v.map((v: any) => {
        return validateNumber(v) ? v : parseFloat(v);
      });
      return sum(arr);
    });
  }

  cloneData?.measures?.map((row) => {
    const isNumber = validateNumber(row.name);
    const rowName = isNumber ? `${row.name} ` : row.name;
    Object.assign(measures, {
      [rowName]:
        stack && percentage ? row.data.map((v: any, i) => round(v / zipSumed[i], 4)) : row.data
    });
  });

  let dims = [];
  const firstDim = dimName === undefined ? 'dimension' : dimName;
  dims.push(firstDim);
  dims = [...dims, ...cloneData?.measures?.map((v) => v.name)];

  const source = Object.assign({}, dimensions, measures);

  const dataset = {
    dimensions: dims,
    source
  };
  return dataset;
};
