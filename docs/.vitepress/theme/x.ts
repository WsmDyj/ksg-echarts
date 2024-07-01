import { PieChart } from 'ksg-echarts';

import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'TechStackSummary',
  render() {
    return h(PieChart, {
      style: {
        height: '100vh'
      },
      option: {
        title: {
          text: 'Traffic Sources',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
      }
    });
  }
});
