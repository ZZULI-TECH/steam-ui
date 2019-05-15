<!--历史订单-->
<template>
  <div style="width: 940px; margin: 70px auto;min-height: 600px">
    <!--左侧栏-->
    <div class="left_tag" style="font-size: 16px;color: #66c0f4;height: 60vh">
      <div class="steam_tag">
        <ul style="height: 40vh;">
          <li class="left_title" style="margin-bottom: 30px">个人中心</li>
          <li class="left_page" style="margin-bottom: 30px">
            <a @click="$router.push('/setInfo')">基本信息修改</a>
          </li>
          <li class="left_page" style="margin-bottom: 30px">
            <a @click="$router.push('/order')">历史订单</a>
          </li>
          <li class="left_page">
            <a @click="$router.push('/lib')">我的游戏库</a>
          </li>
        </ul>
      </div>
    </div>

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
  .left_tag{ width: 213px; height: 975px; position: absolute; left: calc((100vw - 940px)/2 - 213px);top: 180px;}
  .steam_card{ width: 213px; height: 119px;}
  .steam_tag{ width: 213px; height: 856px;}
  .steam_tag ul{ margin-top: 6px; margin-bottom: 12px;}
  .steam_tag li{ margin-top: 6px; }
  .steam_tag li a{ color: #66c0f4;}
  .steam_tag li a:hover{ color: #FFFFFF; text-decoration: none;}
  .left_title{ font-size: 12px;color:#c6d4df; }
  .left_page{ font-size: 11px;}
</style>
