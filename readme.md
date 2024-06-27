
# pro-components

🎉🎉让你的页面变得更简单

# 安装
> yarn add @ksg/pro-components

## 一、标准表格筛选页
<img src="https://blobstore-nginx.staging.kuaishou.com/bs2/image-easydata/cannon-platformimage13882214944739442704.png" width="500px">

### 如何使用
```vue
<template>
  <ComplexPage 
    :tableRequest="tableRequest" 
    :tableColumns="tableColumns" 
    @register="register" 
  />
</template>
<script lang="ts" setup>
import { ComplexPage, useComplexPage } from '@ksg/pro-components'
const [register, { openModal, setFieldsValue }] = useComplexPage()
// 表单配置
const tableColumns = []
// 表单请求
const tableRequest = {
  requestFunc: () => console.log('hello')
}
</script>
```

### useComplexPage说明

> const [register, { openModal, setFieldsValue }] = useComplexPage()

```js
// openModal：打开弹窗表单
openModal({
  title: '弹窗表头',
  formSchemas: '弹窗表单配置', // 如果是confirm可不填
  type: 'confirm', // booble，是否是确认弹窗
  content: '内容', 
  featch: {
    requestFunc: '确认函数',
    tooltip: '成功提示'
  }
})
```

```js
// setFieldsValue：用于点击操作弹窗表单设置值
await openModal()
setFieldsValue(record) // 设置当前项的值
```

### Api
| 属性  | 说明  |   类型   | 默认值 |
| :-------- |:--------| :-----------: | :----: |
| tableColumns  | 表格配置 | array  |   -    |
| selected  | 是否可选择 | Booble  |   -    |
| filterFormProps | 筛选项表单配置 |  formScheams |  - | 
| modalFormProps | 弹窗表单配置 |  formScheams |  - |
| modalProps | 弹窗属性配置 |  ModalProps |  - |
| rowKey | 表格key |  string |  - |
| tableRequest | 表格请求 |  {requestFunc：请求函数,requestParams：请求额外参数, requestFormat： 结果处理函数} |  - |
