<template>
  <div class="ksg-charts">
    <KsgPieChart :data="chartData" :option="option"/>
  </div>
</template>
<script setup>
import { ref} from 'vue'
import { KsgPieChart } from '../../../packages/pie/index'
const option = ref({
  series: {
    label: {
      show: false,
      position: 'center'
    },
    labelLine: {
      show: false
    },
  }
  
      // title: {
      //   text: "Traffic Sources",
      //   left: "center"
      // },
      // tooltip: {
      //   trigger: "item",
      //   confine: true
      //   // formatter: "{a} <br/>{b} : {c} ({d}%)"
      // },
    })

    const chartData = ref({
          dimensions: {
            name: "渠道",
            data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"]
          },
          measures: [
            {
              name: "Traffic Sources",
              data: [10000, 27800, 22000, 20200, 15600]
            }
          ]
        })
</script>
<style>
.ksg-charts{
  height: 200px;
  width: 200px;
  overflow: hidden;
}
</style>