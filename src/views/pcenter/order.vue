<!--历史订单-->
<template>
  <div style="width: 100%; margin: 70px auto">
    <el-table
      :data="orders"
      style="width: 940px;margin: 0 auto">
      <el-table-column
        type="index"
        label="序号"
        width="60"/>
      <el-table-column
        prop="name"
        label="商品"
        width="500">
        <template itemscope>
          <!-- TODO 订单对应的游戏列表-->
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"/>
    </el-table>
  </div>
</template>
<script>
import { orderList } from '@/api/order'
export default {
  data() {
    return {
      orders: []
      // TODO 订单对应的游戏列表
    }
  },
  created() {
    // TODO
  },
  methods: {
    orderList() {
      orderList().then(res => {
        // TODO orders
      })
    }
  }
}
</script>
<style>

</style>
