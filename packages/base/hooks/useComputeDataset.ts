import { KsgChartsData } from "../../types";

export function useComputeDataset(data?: KsgChartsData) {
  const dimensions = new Set()
  if (data && data.length) {
     data.forEach((it) => {
       Object.keys(it).forEach((key) => dimensions.add(key));
     });
  }
  const dataset = {
    dimensions: [...dimensions],
    source: data || []
  };
  return { dataset, dimensions: [...dimensions] };
}