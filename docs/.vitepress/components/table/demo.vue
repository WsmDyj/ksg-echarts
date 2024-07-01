<template>
  <div class="demoblock" :class="[customClass ? customClass : '']">
    <div class="demoblock-view">
      jdka
      <!-- <slot></slot> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoBlock',
  props: {
    customClass: String
  }
}
</script>

<!-- <style scoped>
.demoblock {
  margin: 10px 0;
  height: 300px!important;
}
.demoblock .demoblock-view {
  border: solid 1px #ebebeb;
  border-radius: 3px;
  box-sizing: border-box;
  padding: 24px;
  transition: .2s;
}
</style> -->
