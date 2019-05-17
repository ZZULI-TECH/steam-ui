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
      <el-table-column type="expand">
        <template slot-scope="props">
          <div v-for="item in props.row.orderGames" :key="item.id" style="width: 870px; height: 69px;margin-bottom: 10px">
            <img :src="item.gameCover" style="float: left;cursor: pointer;margin-right: 100px" width="184" height="69" @click="goDetail(item.id)">
            <div style="margin-top: 20px;float: left;margin-left: 20px;width: 250px">
              <span style="font-size: 16px;display: block; margin-bottom: -10px">{{ item.gameName }}</span>
            </div>
            <div style="float: left;margin-left: 80px">
              <span style="display: block;margin-top: 20px;margin-right: 30px">￥{{ item.costPrice }}</span>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        type="index"
        label="序号"
        width="60"/>
      <el-table-column
        prop="id"
        label="订单号"
        width="200"/>
      <el-table-column
        prop="orderSn"
        label="流水号"
        width="330"/>
      <el-table-column
        prop="gmtCreate"
        label="下单时间"/>
      <el-table-column
        prop="orderAmount"
        label="付款金额(￥)"/>
      <el-table-column
        prop="stateCN"
        label="订单状态"/>
    </el-table>
    <div style="width: 800px;height: 35px;">
      <el-pagination
        :total="query.total"
        layout="total, prev, pager, next"
        background="#16202D"
        style="margin-top: 4px"
        @current-change="currentChange"/>
    </div>
  </div>
</template>
<script>
import { orderList } from '@/api/order'
import store from '@/store'
export default {
  data() {
    return {
      orders: [],
      query: {
        userId: store.getters.userId,
        pageNum: 1,
        pageSize: 10,
        orderStatus: null,
        total: 10
      }
      // TODO 订单对应的游戏列表
    }
  },
  created() {
    this.orderList()
    // TODO
  },
  methods: {
    orderList() {
      orderList(this.query.userId, this.query.pageNum, this.query.pageSize, this.query.orderStatus).then(res => {
        // TODO orders
        this.orders = res.content.records
        this.query.total = parseInt(res.content.total)
        this.orders.forEach((order, index) => {
          if (order.orderStatus === 1 || order.orderStatus === 2) {
            this.$set(this.orders[index], 'stateCN', '等待发货')
          } else if (order.orderStatus === 3) {
            this.$set(this.orders[index], 'stateCN', '已发货')
          } else if (order.orderStatus === 4) {
            this.$set(this.orders[index], 'stateCN', '已完成')
          }
        })
      })
    },
    currentChange(pageNum) {
      this.query.pageNum = pageNum
      this.orderList()
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
