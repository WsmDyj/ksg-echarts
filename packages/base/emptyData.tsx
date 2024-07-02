/*
 * @Author: wusimin wusimin@kuaishou.com
 * @Date: 2024-07-03 05:15:09
 * @LastEditors: wusimin wusimin@kuaishou.com
 * @LastEditTime: 2024-07-03 05:35:07
 * @FilePath: /kwaida-charts/packages/base/emptyData.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent } from "vue";

export default defineComponent({
  setup(props, ctx) {
    return () => <div>
      <img src="https://h2.static.yximgs.com/udata/pkg/bi-dashboard-static/img/status-no-auth.23ba227a.png"/>
    </div>
  },
})