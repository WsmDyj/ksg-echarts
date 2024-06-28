<template>
 
  <div>
     
    <PieChart :data="chartData" :option="option"></PieChart>
  </div>
</template>
<script setup>
import { ref} from 'vue'
import { PieChart } from '../../../packages/index'

const option = ref({
      title: {
        text: "Traffic Sources",
        left: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      
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