<template>
  <ksg-base-chart :option="options" />
</template>
<script setup>
import { ref } from 'vue';
import { FunnelChart } from 'echarts/charts';
import { use } from 'echarts/core';
use([FunnelChart]);
const options = ref({
  series: [{
    name: 'Funnel',
    type: 'funnel',
    data: [
      { value: 60, name: 'Visit' },
      { value: 40, name: 'Inquiry' },
      { value: 20, name: 'Order' },
      { value: 80, name: 'Click' },
      { value: 100, name: 'Show' }
    ]
  }]
})
// data: [
  //   { value: 60, name: "访问" },
  //   { value: 40, name: "咨询" },
  //   { value: 20, name: "订单" },
  //   { value: 80, name: "点击" },
  //   { value: 100, name: "展现" },
  // ],

//   {
//     "dataset": {
//         "dimensions": [
//             "week",
//             "pv"
//         ],
//         "source": [
//             {
//                 "week": "Mon",
//                 "pv": 31
//             },
//             {
//                 "week": "Tue",
//                 "pv": 40
//             },
//             {
//                 "week": "Wed",
//                 "pv": 35
//             },
//             {
//                 "week": "Thu",
//                 "pv": 50
//             },
//             {
//                 "week": "Fir",
//                 "pv": 49
//             },
//             {
//                 "week": "Sat",
//                 "pv": 70
//             },
//             {
//                 "week": "Sun",
//                 "pv": 90
//             }
//         ]
//     },
//     "series": [
//         {
//             "type": "line",
//             "name": "pv"
//         }
//     ],
//     "tooltip": {
//         "trigger": "axis",
//         "axisPointer": {
//             "type": "line"
//         }
//     },
//     "xAxis": {
//         "type": "category"
//     },
//     "yAxis": {
//         "type": "value"
//     },
//     "title": {
//         "text": "手动设置title1"
//     }
// }
</script>