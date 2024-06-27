## 基础用法 <Badge type="info" text="default" />

基础的卡片用法。

:::demo

```vue
<template>
  <div class="card-wrap">
    <div class="card">{{ title }}</div>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const title = ref('vitepress-theme-demoblock')

    return { title }
  }
})
</script>

<style>
.card-wrap {
  text-align: center;
}

.card-wrap .card {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  color: pink;
  background: var(--vp-c-bg);
  border: 1px solid pink;
  height: 80px;
  width: 600px;
}
</style>
```

:::

